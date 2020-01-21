import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './account/logout/logout.component';
import { QuizComponent } from './exam/quiz/quiz.component';
import { ResultComponent } from './exam/result/result.component';
import { ListComponent } from './account/list/list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
<<<<<<< HEAD
  { path: 'quiz', component: QuizComponent, canActivate:[AuthGuardService] },
  { path: 'result', component: ResultComponent, canActivate:[AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' } //for default path
=======
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },//for default path
>>>>>>> 75616f29efc28cac5384fd4fff27b08490f784db
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
  ListComponent
]
