import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  private facultyName;
  private flag: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _facultyService: FacultyService) { }

  ngOnInit() {
    //subject name bhi bhejna hai getfacultylist se
    var prn: number = Number(sessionStorage.getItem('prn'));
    this._facultyService.
      getListByStudentPrn(prn).
      subscribe((data) => {
        this.route.params.subscribe((param) => {
          for(const [key,faculty] of Object.entries(data)){
            if(faculty['facultyId'] === Number(param['id'])){
              this.facultyName = faculty['facultyName'];
              this.flag = true;
            }
          }
          if(this.flag === false){
            this.router.navigate(['/feedback']);
          }
        })
      });
  }
}
