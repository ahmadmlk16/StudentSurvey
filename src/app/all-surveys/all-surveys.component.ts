import { Component, OnInit } from '@angular/core';
import { Observable, from } from "rxjs";
import { Survey } from '../survey-api/survey';
import { Router } from '@angular/router';
import {SurveyApiComponent} from '../survey-api/survey-api'




@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  surveys!: Observable<Survey[]>;

  constructor(private surveyService: SurveyApiComponent,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.surveys = this.surveyService.getAllSurveys();
  }

}
