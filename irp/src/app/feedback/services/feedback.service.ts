import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Feedback } from "../models/feedback";

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  readonly rootUrl = "http://localhost:8080/api/feedback";

  constructor(private http: HttpClient) {}

  public getFeedback(prn, facultyId): Observable<Feedback> {
    const body = {
      prn: Number(prn),
      facultyId: Number(facultyId)
    };
    return this.http.post<Feedback>(this.rootUrl + "/getfeedback", body);
  }

  public addFeedback(feedback: Feedback, facultyId): Observable<Feedback> {
    const body = {
      prn: Number(sessionStorage.getItem("prn")),
      facultyId: Number(facultyId),
      punctuality: Number(feedback.punctuality),
      interaction: Number(feedback.interaction),
      teaching: Number(feedback.teaching),
      assignment: Number(feedback.assignment),
      comments: feedback.comments
    };
    console.log(body)
    return this.http.post<Feedback>(this.rootUrl + "/addfeedback", body);
  }
}
