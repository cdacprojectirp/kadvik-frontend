import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../models/TimeTable';

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
    return this.http.get<TimeTable[]>("http://localhost:8080/api/timetable/getTimeTable",{params});
  }
}
