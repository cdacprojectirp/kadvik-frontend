import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Student } from '../models/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private student: Student;

  constructor(private _accountService: AccountService, private router: Router) {
    this.student = new Student();
  }

  onSubmit() {
    console.log(this.student);

    this._accountService.register(this.student).subscribe(result => this.router.navigate(['/'])); //call student registration service

  }

  ngOnInit() {


  }

}
