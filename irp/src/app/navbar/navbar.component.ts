import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNav: boolean;//on true will add show class in navbar-collapse
  isLoggedIn: boolean = false;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this.isLoggedIn = this._accountService.isUserLoggedIn();
  }

}
