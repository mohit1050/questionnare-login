import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private toast: HotToastService,
    private userservice: UserserviceService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.userservice.getUserData(email, password).subscribe((res) => {
      if (res == true) {
        this.router.navigate(['/dashboard']);
        console.log('logged in successfully');
        this.toast.success('Logged in successfully');
      } else {
        this.toast.error('Invalid credentials');
      }

      console.log(res);
    });
  }
}
