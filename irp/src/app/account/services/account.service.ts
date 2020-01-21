import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TimeTable } from '../models/TimeTable';
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
<<<<<<< HEAD
=======
          
>>>>>>> 75616f29efc28cac5384fd4fff27b08490f784db
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
  public findAll(data):Observable<TimeTable[]>{
    let nid = sessionStorage.getItem('prn');
    console.log(nid);
   let params= new HttpParams();
   params = params.set("page",data);
    return this.http.get<TimeTable[]>("http://localhost:8080/api/student/getTimeTable",{params});
  }

}