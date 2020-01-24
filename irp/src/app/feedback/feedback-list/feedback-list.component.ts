import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/faculty/services/faculty.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  private facultyList;

  constructor(private _facultyService: FacultyService) { }

  ngOnInit() {
   var prn: number = Number(sessionStorage.getItem('prn'));
   this._facultyService.getListByStudentPrn(prn).subscribe(
     (data) => {
      this.facultyList = data;
     }
   );
  }

}
