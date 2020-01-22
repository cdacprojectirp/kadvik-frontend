import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly rootUrl = "http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  public authenticate(email, password): Observable<any> {
    var body = {
      "email": email,
      "password": password
    }
    return this.http.post<any>(this.rootUrl+"student/authenticate", body).pipe(
      map(
        userData => {
          
          sessionStorage.setItem('prn', userData);
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
    return this.http.post<Student>(this.rootUrl+"/student/register", student);
  }


}