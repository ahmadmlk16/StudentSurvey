import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})

export class SurveyApiComponent {

  private baseUrl = 'http://34.138.69.26:8080/studentsurveydbmanager/api/surveys';

  constructor(private http: HttpClient) { }

  createSurvey(survey: Survey): Observable<Object> {   
    let req =  this.http.post(this.baseUrl, survey, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    return req;
  }
  
   getAllSurveys(): Observable<any> {
    let req =  this.http.get(this.baseUrl, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    return req;
  }
}