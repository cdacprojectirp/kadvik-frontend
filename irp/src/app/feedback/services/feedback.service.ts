import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  readonly rootUrl = "http://localhost:8080/api/feedback";

  constructor(private http : HttpClient) { }

  
}
