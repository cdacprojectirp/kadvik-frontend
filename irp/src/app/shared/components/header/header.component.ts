import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarCheck: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleSideBarCheck.emit();
  }

  logout(){
    this.router.navigate(['/logout']);
  }
}
