import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/faculty/services/faculty.service';
import { FeedbackService } from '../services/feedback.service';
import { Faculty } from 'src/app/faculty/models/faculty';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  private faculty: Faculty = new Faculty();
  private flag: boolean = false;
  private feedback;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _facultyService: FacultyService,
    private _feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    var prn: number = Number(sessionStorage.getItem('prn'));
    this._facultyService.
      getListByStudentPrn(prn).
      subscribe((data) => {
        this.route.params.subscribe((param) => {
          for (const [key, faculty] of Object.entries(data)) {
            if (faculty['facultyId'] === Number(param['id'])) {
              this.faculty.facultyId = faculty['facultyId'];
              this.faculty.facultyName = faculty['facultyName'];
              this.faculty.subjectName = faculty['subjectName'];
              this.faculty.courseName = faculty['courseName'];
              this.flag = true;
            }
          }
          //If faculty does not teach the logged in student)
          if (this.flag === false) {
            this.router.navigate(['/feedback']);
          }
          //If facultyId is verified(i.e faculty teaches to the logged in student)
          //check if feedback is already filled for this faculty by the logged in student
          this._feedbackService.getFeedback(prn, this.faculty.facultyId).subscribe(
            (data) => {
              if (data === null) { //if feedback is not filled
                
              }
              else { // if feedback is already filled
                this.feedback =  data;
                console.log("you have filled feedback");
              }
            });
        })
      });
  }
}
