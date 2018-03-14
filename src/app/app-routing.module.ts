import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EhomeComponent } from './components/home/ehome/ehome.component';
import { MhomeComponent } from './components/home/mhome/mhome.component';
import { SubmitTicketComponent } from './components/tickets/e-submit-ticket/submit-ticket.component';
import { UpdateTicketComponent } from './components/tickets/e-update-ticket/update-ticket.component';
import { ViewTicketComponent } from './components/tickets/e-view-ticket/view-ticket.component';
import { ViewUserComponent } from './components/user/e-view-user/view-user.component';
import { MViewTicketComponent } from './components/tickets/m-view-ticket/m-view-ticket.component';
import { MViewUserComponent } from './components/user/m-view-user/m-view-user.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    //employee comp
    // {path:'ehome',component:EhomeComponent,canActivate:["guard-name"]},
    {path:'ehome',component:EhomeComponent},
    {path:'emp-submitTicket',component:SubmitTicketComponent},
    {path:'emp-uploadImg', component:UpdateTicketComponent},
    {path:'emp-reimbursements', component:ViewTicketComponent},
    {path:'emp-viewUser', component:ViewUserComponent},
    //manager comp
    {path:'man-viewTix', component:MViewTicketComponent},
    {path:'man-viewUser', component:MViewUserComponent},
    {path:'mhome',component:MhomeComponent},
    //
    {path:'**', component:LoginComponent} //change this to a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
