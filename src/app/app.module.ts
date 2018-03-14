import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MhomeComponent } from './components/home/mhome/mhome.component';
import { EhomeComponent } from './components/home/ehome/ehome.component';
import { ENavComponent } from './components/navbar/e-nav/e-nav.component';
import { MNavComponent } from './components/navbar/m-nav/m-nav.component';
import { SubmitTicketComponent } from './components/tickets/e-submit-ticket/submit-ticket.component';
import { UpdateTicketComponent } from './components/tickets/e-update-ticket/update-ticket.component';
import { ViewTicketComponent } from './components/tickets/e-view-ticket/view-ticket.component';
import { ViewUserComponent } from './components/user/e-view-user/view-user.component';
import { TicketTableComponent } from './components/helper/view-table/ticket-table/ticket-table.component';
import { FilterComponent } from './components/helper/view-table/filter/filter.component';

//Services
import { LoginService } from './services/login/login.service';
import { LogoutComponent } from './services/logout/logout.component';
//get user services
import { UserByIdService } from './services/get/users/user-by-id/user-by-id.service';
import { UserAllService } from './services/get/users/user-all/user-all.service';
//get tix services
import { TixAllService } from './services/get/tickets/tix-all/tix-all.service';
import { TixByUidService } from './services/get/tickets/tix-by-uid/tix-by-uid.service';
import { TixByStatusService } from './services/get/tickets/tix-by-status/tix-by-status.service';
import { TixStatusAndUidService  } from './services/get/tickets/tix-status-and-uid/tix-status-and-uid.service';
//update user services
import { UpdateUserService } from './services/update/user/update-user/update-user.service';
//update ticket services
import { UpdateImgService } from './services/update/ticket/update-img/update-img.service';
import { UpdateTicketService } from './services/update/ticket/update-ticket/update-ticket.service';
import { MViewUserComponent } from './components/user/m-view-user/m-view-user.component';
import { MViewTicketComponent } from './components/tickets/m-view-ticket/m-view-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MhomeComponent,
    EhomeComponent,
    ENavComponent,
    MNavComponent,
    SubmitTicketComponent,
    UpdateTicketComponent,
    ViewTicketComponent,
    ViewUserComponent,
    TicketTableComponent,
    FilterComponent,
    LogoutComponent,
    MViewUserComponent,
    MViewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    LogoutComponent,
    UserByIdService,
    UserAllService,
    TixAllService,
    TixByUidService,
    TixByStatusService,
    TixStatusAndUidService,
    UpdateUserService,
    UpdateImgService,
    UpdateTicketService
    //add guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
