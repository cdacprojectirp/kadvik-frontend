import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticeBoard } from '../account/models/NoticeBoard';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {

  readonly rootUrl = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  public findAll(data):Observable<NoticeBoard[]>{
    let nid = sessionStorage.getItem('prn');
    console.log(nid);
   let params= new HttpParams();
   console.log(data);
   params = params.set("page",data);
    return this.http.get<NoticeBoard[]>("http://localhost:8080/api/student/getNoticeBoard",{params});
  }

}
