import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import questions from '../questions-test/questions.json';

interface Questions {
  qid: Number;
  ques: String;
  choice1: String;
  choice2: String;
  choice3: String;
  choice4: String;
  correct: String;
}

@Component({
  selector: 'app-questions-test',
  templateUrl: './questions-test.component.html',
  styleUrls: ['./questions-test.component.css'],
})
export class QuestionsTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  questions: Questions[] = questions;

  selectedDay: string = '';
  selected: any = 'not selected yet';
  selected1: any = 'not selected yet';
  1: any = 'not selected';
  2: any = 'not selected';
  3: any = 'not selected';
  4: any = 'not selected';
  5: any = 'not selected';
  6: any = 'not selected';

  days: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  //event handler for the radio button's change event
  radioChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }

  // myf;
  // save(myForm) {
  //   console.log(myForm);
  // }

  // form = new FormGroup({});

  // submit() {
  //   console.log(this.form.value);
  // }
}
