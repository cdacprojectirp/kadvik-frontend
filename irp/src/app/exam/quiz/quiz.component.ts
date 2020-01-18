import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../examService/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizService ) { }

  ngOnInit() {
    
  }

}
