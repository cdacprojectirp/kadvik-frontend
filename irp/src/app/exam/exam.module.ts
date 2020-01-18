import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [QuizComponent, ResultComponent],
  imports: [
    CommonModule
  ]
})
export class ExamModule { }
