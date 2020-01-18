import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //---properties---
  rootUrl = "http://localhost:8080/api/";
  questions: any[];
  seconds: number;
  timer;
  qstProgress: number;
  correctAnswerCounter: number = 0;

  //---ctor---
  constructor(private http: HttpClientModule) { }

  //---helper methods---
  displayTimerElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  //---http methods---
  
  getQuestions(){
   // return this.http.get(this.rootUrl+"exam/quiz");
  }

}
