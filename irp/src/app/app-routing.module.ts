import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './account/logout/logout.component';
import { QuizComponent } from './exam/quiz/quiz.component';
import { ResultComponent } from './exam/result/result.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { TimetableComponent } from './modules/timetable/timetable.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';



const routes: Routes = [
  {
    path:'default', component:DefaultComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'posts',component:PostsComponent},
    { path: 'timetable', component: TimetableComponent },
  ]
},
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
 // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'noticeboard', component: NoticeboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },//for default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  RegisterComponent,
 // DashboardComponent,
  LogoutComponent,
  QuizComponent,
  ResultComponent,
  TimetableComponent,
  FeedbackComponent,
  FeedbackListComponent,

]
