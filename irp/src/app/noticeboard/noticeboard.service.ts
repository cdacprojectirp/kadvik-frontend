import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticeBoard } from '../account/models/NoticeBoard';






@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {
  readonly rootUrl = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  public findAll():Observable<NoticeBoard[]>{
    
    return this.http.get<NoticeBoard[]>("http://localhost:8080/api/student/getNoticeBoard");
  }

}
