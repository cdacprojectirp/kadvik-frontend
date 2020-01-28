import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableListComponent } from './time-table-list/time-table-list.component';
import { TimeTableAdminComponent } from './time-table-admin/time-table-admin.component';



@NgModule({
  declarations: [TimeTableListComponent, TimeTableAdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
