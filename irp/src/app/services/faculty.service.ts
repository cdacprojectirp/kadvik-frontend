import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private facultyListByStudentPrn;

  constructor(private http : HttpClient) { }

  readonly rootUrl = "http://localhost:8080/api/faculty";

  public getListByStudentPrn(prn:number){
    var body = {
      "prn" : prn
    }

    return this.http.post<any>(this.rootUrl+"/getlistbystudentprn", body);
  }
}
