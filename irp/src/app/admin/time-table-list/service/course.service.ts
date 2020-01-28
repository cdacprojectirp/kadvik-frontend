import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly rootUrl = "http://localhost:8080/api/course/getAllCourse";

  constructor(private http: HttpClient) {}

  public getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.rootUrl);
  }
}
