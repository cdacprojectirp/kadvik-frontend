import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _accountService: AccountService,
    private router: Router) {

  }

  ngOnInit() {
    this._accountService.logOut();
    this.router.navigate(['login']);
  }

}
