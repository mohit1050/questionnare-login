import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import questions from '../attempt-test/questions.json';
interface Questions {
  qid: String;
  name: String;
  order: number;
  options: [];
}

@Component({
  selector: 'app-attempt-test',
  templateUrl: './attempt-test.component.html',
  styleUrls: ['./attempt-test.component.css'],
})
export class AttemptTestComponent implements OnInit {
  form = new FormGroup({
    gender: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changeGender(e: any) {
    console.log(e.target.value);
  }

  ngOnInit(): void {}
}
