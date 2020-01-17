import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IStudent } from '../models/student';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public authenticate(email, password): Observable<IStudent>{

    var body = {
      "email":email,
      "password":password
    }

    return this.http.post<IStudent>('http://localhost:8080/api/student/authenticate', body);

  }
}