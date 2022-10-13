import { Component, OnInit } from '@angular/core';
import dataimport from '../questions2/data.json';

// interface Data {
//   name: string;
//   qid: number;
//   options?: any;
// }

@Component({
  selector: 'app-questions2',
  templateUrl: './questions2.component.html',
  styleUrls: ['./questions2.component.css'],
})
export class Questions2Component implements OnInit {
  //   constructor() { }

  ngOnInit(): void {}

  // }

  data1: any = {
    questions: [
      {
        name: 'Question 1 this is great question',
        qid: 1,
        options: [
          {
            name: 'Option 1',
            aid: 1,
            isAnswer: true,
          },
          {
            name: 'Option 2',
            aid: 2,
            isAnswer: true,
          },
          {
            name: 'Option 3',
            aid: 3,
            isAnswer: true,
          },
          {
            name: 'Option 4',
            aid: 4,
            isAnswer: true,
          },
        ],
      },
      {
        name: 'Question 2 god of all questions',
        qid: 2,
        options: [
          {
            name: 'Option 3',
            aid: 1,
            isAnswer: true,
          },
          {
            name: 'Option 4',
            aid: 2,
            isAnswer: true,
          },
        ],
      },
    ],
  };

  data: any = dataimport;

  constructor() {
    console.log(this.data);
  }
  submitData: any;
  getJsonResult() {
    let answer: any;
    let data = {
      lessonCode: 'test',
      answers: this.data.questions.map((x: any) => {
        return {
          qid: x.qid,
          aid: x.i,
          // aid: x.options.aid,
        };
      }),
    };

    this.submitData = data;
    console.log(JSON.stringify(this.submitData));

    // this.download();
  }
  onClick(event: any) {
    console.log(event);
  }

  jsonstring: any = JSON.stringify(this.data);

  download() {
    let file = new Blob([this.jsonstring], { type: '.txt' });
    let a = document.createElement('a'),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'responses';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
