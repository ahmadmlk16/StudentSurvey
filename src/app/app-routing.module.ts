import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-survey', component: NewSurveyComponent },
  { path: 'all-surveys', component: AllSurveysComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
