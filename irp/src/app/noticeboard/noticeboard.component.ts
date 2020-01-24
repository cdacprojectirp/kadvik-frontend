import { Component, OnInit } from '@angular/core';
import { NoticeBoard } from '../account/models/NoticeBoard';
import { NoticeboardService } from './noticeboard.service';


@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {


  NoticeBoard: NoticeBoard[];
  constructor(private noticeboardService: NoticeboardService) { }

  ngOnInit() {

    this.noticeboardService.findAll().subscribe(data => 
      {this.NoticeBoard=data;});
      console.log(this.NoticeBoard);
  }

}
