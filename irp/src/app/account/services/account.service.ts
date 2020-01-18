import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  public authenticate(email, password): Observable<Student> {
    var body = {
      "email": email,
      "password": password
    }
    return this.http.post<Student>("http://localhost:8080/api/student/authenticate", body).pipe(
      map(
        userData => {
          sessionStorage.setItem('prn', userData.prn);
          return userData;
        }
      )
    );
  }

  public isUserLoggedIn() {
    var user = sessionStorage.getItem('prn')
    return !(user === null)
  }

  public logOut() {
    sessionStorage.removeItem('prn')
  }

  public register(student: Student) {
    return this.http.post<Student>("http://localhost:8080/api/student/register", student);
  }

}