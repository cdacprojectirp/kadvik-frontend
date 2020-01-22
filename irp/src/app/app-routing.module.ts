import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './account/logout/logout.component';
import { QuizComponent } from './exam/quiz/quiz.component';
import { ResultComponent } from './exam/result/result.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { ListComponent } from './account/list/list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'feedback', component: FeedbackListComponent, canActivate: [AuthGuardService] }, 
  { path: 'feedback/:id', component: FeedbackComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } //for default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  LogoutComponent,
  QuizComponent,
  ResultComponent,
  FeedbackComponent,
  FeedbackListComponent,
  ListComponent
]
