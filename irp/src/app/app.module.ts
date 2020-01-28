import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './account/logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimetableComponent } from './modules/timetable/timetable.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { SubjectsComponent } from './exam/subjects/subjects.component';
import { TimeTableListComponent } from './admin/time-table-list/time-table-list.component';
import { TimeTableAdminComponent } from './admin/time-table-admin/time-table-admin.component';

//import { TimeTableAdminComponent } from './admin/time-table-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    NavbarComponent,
    NoticeboardComponent,
    TimetableComponent,
    TimeTableListComponent,
    TimeTableAdminComponent,
    SubjectsComponent//needed here unknowingly

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    DefaultModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
