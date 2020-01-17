import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //classes on alert box
  public alert = {
    "hidden":true
  }

  //model object to store student data
  public student;

  //user entered values
  public email = "";
  public password = "";


  public message = ""

  //injecting auth service
  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  //login function
  public login() {
    this.message = ""; //just for testing
    this._accountService.authenticate(this.email, this.password).
      subscribe(data => { //subscribing to observable
         //if invalid details
        if (data === null) {
          console.log("invalid Details");
          this.alert.hidden = false;
          return;
        }
        //if details are correct
        this.alert.hidden = true;
        this.message = "Login Sucessful"; //just for testing
        this.student = data;
        console.log(this.student);
      });
  }
}
