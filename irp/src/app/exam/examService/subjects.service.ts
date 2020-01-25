import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  rootUrl = "http://localhost:8080/api";
  subjects: any[];

  constructor(private http: HttpClient) { }


  getSubjects(): Observable<any>{
    var body= sessionStorage.getItem('prn');
    return this.http.post(this.rootUrl+ "/subject/list", body);
  }
  

}
