import { Component, OnInit } from '@angular/core';
import { TimeTable } from '../models/TimeTable';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  timeTable: TimeTable[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    var data=sessionStorage.getItem('prn');
    this.accountService.findAll(data).subscribe(data=>{
      this.timeTable=data;
    });
  }

}
