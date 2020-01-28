import { Component, OnInit } from '@angular/core';
import { Course } from '../time-table-list/Models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../time-table-list/service/course.service';
import { TimeTableAdminService } from './service/time-table-admin.service';
import { TimeTable } from 'src/app/modules/timetable/models/TimeTable';

@Component({
  selector: 'app-time-table-admin',
  templateUrl: './time-table-admin.component.html',
  styleUrls: ['./time-table-admin.component.css']
})
export class TimeTableAdminComponent implements OnInit {
  private course: Course = new Course;
  private timeTable:TimeTable[];
  private flag: boolean = false;
  private isFilled:boolean;
  private alert:string;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _courseService: CourseService,
    private _timeTableAdminService:TimeTableAdminService
  ) { }

  ngOnInit() {
    this._courseService.getAllCourse().subscribe((data) => {
        this.route.params.subscribe((param) => {
          for (const [key, course] of Object.entries(data)) {
            if (course['courseId'] === Number(param['courseId'])) {
              this.course.courseId = course['courseId'];
              this.course.courseName = course['courseName'];
              console.log(this.course.courseName);
              this.flag = true;
            }
          }
          if (this.flag === false) {
            this.router.navigate(['/','courses']);
          }
          
          
          
           this._timeTableAdminService.getTimeTable(this.course.courseId).subscribe(
             (data) => {
               if (data === null) { //if feedback is not filled
                 this.isFilled = false;
               }
               else { // if feedback is already filled
                 this.timeTable =  data;
                 this.isFilled = true;
               }
             });
        })
      });
  }


   public submitTimeTable(){
     this.timeTable.forEach(data=>{
       data.courseId=this.course.courseId;
     })
      this._timeTableAdminService.updateTimeTable(this.timeTable).subscribe(
        (data) => {
           this.router.navigate(['/courses']);
         },
         (err) => {
           console.log(err);
         }
       );
      
}
}