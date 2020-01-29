import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../examService/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  colour = 'brown lighten-1';
  activate: number;

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
     
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qstProgress = parseInt(localStorage.getItem('qstProgress'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));
      if (this.quizService.qstProgress == 10)
        this.router.navigate(['/default', 'result']);
      else{ 
        //if (this.quizService.seconds.toString() != localStorage.getItem('seconds')) 
        this.startTimer();
      }

    }
    else {
      this.quizService.seconds = 0;
      this.quizService.qstProgress = 0;
      // this.quizService.getQuestions().subscribe(
      //   (data: any) => {
      //     console.log('quizData'+ data);
      //     this.quizService.questions = data;
      //     this.startTimer();
      //   }
      // );
      if (localStorage.getItem('subjects') == null) {
        this.getSubjectList();
      }
      this.quizService.getQuestionsBySubject().subscribe(
        (data: any) => {
          console.log('quizDataByQst' + data);
          this.quizService.questions = data;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
      localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);

    console.log(this.quizService.seconds);
  }

  getSubjectList() {
    this.router.navigate(['/default', 'subjects']);
  }

  answer(qId, choice) {
    console.log(this.quizService.qstProgress);
    this.quizService.questions[this.quizService.qstProgress].answer = choice;
    localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
    this.next(this.quizService.qstProgress);
    localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());

  }

  previous(qProgress) {

    if (this.quizService.qstProgress == 0)
      this.quizService.qstProgress = 9;
    else
      this.quizService.qstProgress--;
    this.activate = this.quizService.questions[this.quizService.qstProgress].answer;
  }

  next(qProgress) {
    if (this.quizService.qstProgress == 9)
      this.quizService.qstProgress = 0;
    else
      this.quizService.qstProgress++;
    this.activate = this.quizService.questions[this.quizService.qstProgress].answer;
  }

  onSubmit(qProgress) {
    this.quizService.qstProgress = 10;
    localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
    clearInterval(this.quizService.timer);
    this.router.navigate(['/default', 'result']);
  }
}
