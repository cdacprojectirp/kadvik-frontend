import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //classes on alert box
  public alert = {
    "hidden": true
  }

  //user entered values
  public email = "";
  public password = "";

  //injecting auth service
  constructor(private router: Router, private _accountService: AccountService) { }

  ngOnInit() {
  }

  //login function
  public login() {
    this._accountService.authenticate(this.email, this.password).
      subscribe(data => { //subscribing to observable
        //if details are correct
        this.student = data;
        this.router.navigate(['/default/dashboard'])
      }, err => {
        //if invalid details
        console.log("invalid Details");
        this.alert.hidden = false;
      });
  }
}
