import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from '../examService/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private router: Router, private subjectService: SubjectsService) { }

  ngOnInit() {
    console.log(localStorage.getItem('subjects'))
    if (localStorage.getItem('subjects') == null){
      this.subjectService.getSubjects().subscribe(
        (data: any) => {
          this.subjectService.subjects = data;
        }
      );
    localStorage.setItem('subjects', JSON.stringify(this.subjectService.subjects));
    } else {
      this.subjectService.subjects=JSON.parse(localStorage.getItem('subjects'));
    }
  }

}
