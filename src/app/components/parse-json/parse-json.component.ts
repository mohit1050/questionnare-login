import { Component, OnInit } from '@angular/core';
import studentsData from '../parse-json/students.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-parse-json',
  templateUrl: './parse-json.component.html',
  styleUrls: ['./parse-json.component.css'],
})
export class ParseJSONComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'Angular';

  students: Student[] = studentsData;

  submitData: any;
  getJsonResult() {
    let data = {
      answers: this.students.map((x) => {
        return {
          questionCode: x.id,
          // optionCode: x.options.code,
        };
      }),
    };
    this.submitData = data;
    console.log(JSON.stringify(this.submitData));
  }
  onClick(event: any) {
    console.log(event);
  }
}
