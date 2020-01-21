import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //---properties---
  rootUrl = "http://localhost:8080/api";
  questions: any[];
  seconds: number;
  timer;
  qstProgress: number;
  correctAnswerCounter: number = 0;

  //---ctor---
  constructor(private http: HttpClient) { }

  //---helper methods---
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  //---http methods---

  getQuestions() {
    return this.http.get(this.rootUrl + "/exam/quiz");
  }

  getAnswers() {
    var body = this.questions.map(qst => qst.qnId)
    return this.http.post(this.rootUrl + "/exam/answers", body);
  }

  // submitScore(){
  //   var body= ;
  //   body.score= this.correctAnswerCounter;
  //   body.timeSpent= this.seconds;
  //   return this.http.post()
  // }
}
