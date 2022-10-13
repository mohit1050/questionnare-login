import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Questionnare';
  constructor(private router: Router) {}

  loginFunc() {
    this.router.navigate(['/login']);
    console.log('login triggered in main');
  }

  parsejsonFunc() {
    this.router.navigate(['/parsejson']);
  }

  questionsTestFunc() {
    this.router.navigate(['/questiontest']);
  }

  attemptTestFunc() {
    this.router.navigate(['/attempttest']);
  }

  questions2Func() {
    this.router.navigate(['/questions2']);
  }
}
