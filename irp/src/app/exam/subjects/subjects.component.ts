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
      console.log('hey');
      this.subjectService.getSubjects().subscribe(
        (data: any) => {
          console.log('data '+data);
          this.subjectService.subjects= data;
        }
      );
      //console.log(JSON.stringify(this.subjectService.subjects));
    localStorage.setItem('subjects', JSON.stringify(this.subjectService.subjects));
    } else {
      console.log('bye');
      this.subjectService.subjects=JSON.parse(localStorage.getItem('subjects'));
    }
  }

}
