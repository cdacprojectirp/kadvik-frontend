import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from '../examService/subjects.service';
import { QuizService } from '../examService/quiz.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private router: Router, private subjectService: SubjectsService, private quizService: QuizService) { }

  ngOnInit() {
    if (localStorage.getItem('subjects') == null) {
      console.log('hey');
      this.subjectService.getSubjects().subscribe(
        (data: any) => {
          //console.log(JSON.stringify(data));
          this.subjectService.subjects = data;
          //console.log(JSON.stringify(this.subjectService.subjects));
        }, (err) => {
          console.log(err);
        }, () => {
          console.log(JSON.stringify(this.subjectService.subjects));
          localStorage.setItem("subjects", JSON.stringify(this.subjectService.subjects));
        }
      );
    } else {
      console.log('bye');
      this.subjectService.subjects = JSON.parse(localStorage.getItem("subjects"));
      if(localStorage.getItem('subjectId')!='0'){
        this.router.navigate(['/default', 'quiz']);
      }
    }

  }

  getQuiz(id) {
    this.quizService.subjectId = id;
    localStorage.setItem("subjectId", id);
    this.router.navigate(['/default', 'quiz']);
  }
}