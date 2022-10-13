export interface Option {
  name: string;
  aid?: number;
  i?: number;
  isAnswer: boolean;
}

export interface Question {
  name: string;
  qid: number;
  options?: Option[];
}

export interface RootObject {
  questions?: Question[];
}
