import { Injectable } from '@angular/core';
import { TimeTable } from 'src/app/account/models/TimeTable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }

  public findAll(data):Observable<TimeTable[]>{
    let nid = sessionStorage.getItem('prn');
    console.log(nid);
   let params= new HttpParams();
   params = params.set("page",data);
    return this.http.get<TimeTable[]>("http://localhost:8080/api/student/getTimeTable",{params});
  }
}
