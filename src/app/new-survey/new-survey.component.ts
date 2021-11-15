import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SurveyApiComponent} from '../survey-api/survey-api'
import { Survey } from '../survey-api/survey';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  survey: Survey ={  
  firstName: "",
  lastName: "",
  address: "",
  city: "" ,
  state: "",
  zip: "",
  tel: "",
  emailId: "",
  sdate: "",
  like_about_college: "",
  interested_in_college: "Other",
  recommend: "Likely"};

  nestedjson = [
    { name: "Students", value: "Students", checked: false },
    { name: "Location", value:  "Location", checked: false },
    { name: "Campus", value:  "Campus", checked: false },
    { name: "Atmosphere", value: "Atmosphere", checked: false },
    { name: "Dorm Rooms", value:  "Dorm Rooms", checked: false },
    { name: "Sports", value:  "Sports", checked: false }
  ];

  constructor(private surveyService: SurveyApiComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  newSurvey(): void {
    this.survey = {  
      firstName: "",
      lastName: "",
      address: "",
      city: "" ,
      state: "",
      zip: "",
      tel: "",
      emailId: "",
      sdate: "",
      like_about_college: "",
      interested_in_college: "Other",
      recommend: "Likely"};
      this.nestedjson.forEach(child => {
        child.checked = false
      })
  }

  save() {
    this.surveyService.createSurvey(this.survey)
      .subscribe(data => console.log(data), error => console.log(error));
    this.newSurvey();
  }

  clickEvent():void {    
    this.nestedjson.forEach(child => {
      if(child.checked==true){
        this.survey.like_about_college = this.survey.like_about_college.concat(child.name).concat(", ");
      }
    })

    if(this.survey.like_about_college.length > 2){
      this.survey.like_about_college =  this.survey.like_about_college.substr(0,this.survey.like_about_college.length-2)
    }

    this.save();    
  }

}
