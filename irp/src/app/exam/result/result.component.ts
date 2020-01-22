import { Component, OnInit } from '@angular/core';
import { QuizService } from '../examService/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qstProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qstProgress = parseInt(localStorage.getItem('qstProgress'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));

      this.quizService.getAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCounter = 0;
          this.quizService.questions.forEach((ele, i) => {
            if (ele.answer == data[i])
              this.quizService.correctAnswerCounter++;
            ele.correct = data[i];
          }
          );
        }
      );
    }
    else
      this.router.navigate(['/quiz']);
  }

  // onSubmit(){
  //   this.quizService.submitScore().subscribe(()=>
  //   this.restart();

  //   );
  // }

  restart() {
    localStorage.setItem('qstProgress', "0");
    localStorage.setItem('questions', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);

  }

}
