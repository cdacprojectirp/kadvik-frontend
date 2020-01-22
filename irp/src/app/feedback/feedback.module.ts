import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [FeedbackListComponent, FeedbackComponent],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }
