import { Component, OnInit } from '@angular/core';

import { TimetableService } from './services/timetable.service';
import { TimeTable } from './models/TimeTable';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  timeTable: TimeTable[];
  constructor(private timeTableService: TimetableService) { }

  ngOnInit() {
    var data=sessionStorage.getItem('prn');
    this.timeTableService.findAll(data).subscribe(data=>{
      this.timeTable=data;
    });
}
}
