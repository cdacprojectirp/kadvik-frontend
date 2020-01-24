import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './account/logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './account/list/list.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    NavbarComponent,
    ListComponent,
    NoticeboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
