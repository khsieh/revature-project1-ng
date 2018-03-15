import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TixByUidService } from '../../../services/get/tickets/tix-by-uid/tix-by-uid.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

    cols = ["reimburseID", "amount", "description", "submitted", "resolved", "author","resolver","type","status"];
    tableContent=[];
    sub;

    constructor(private viewService:TixByUidService, private router:Router) { }

    ngOnInit() {
        this.generateCallAll();
    }

    generateCallAll(){

        let uid = sessionStorage.getItem("uid");
        let type = "all";
        this.sub = this.viewService.send(type,uid).subscribe(
            resp=>{
                // console.log(resp.status);
                // console.log("resp body: " + resp.body);
                let rbody = JSON.parse(resp.body);
                // this.tableContent = rbody.tickets;
                console.log(rbody.tickets);
                Array.prototype.forEach.call(rbody.tickets,element=>{
                // rbody.tickets.array.forEach(element => {
                    element["rStatus"]=this.convertStatus(element["rStatus"]);
                    element["rType"]=this.convertStatus(element["rType"]);
                    // let e = JSON.parse(element);
                    // console.log(e);
                    this.tableContent.push(element);
                });
            },
            err=>{
                console.log(err.status);
            }
        );
    }

    convertStatus(s:number):string{
        switch(s){
            case 1:
                return "Pending";
            case 2:
                return "Approved";
            case 3:
                return "Denied";
            default:
                return "Unknown";
        }
    }

    convertType(s:number):string{
        switch(s){
            case 1:
                return "Travel";
            case 2:
                return "Business";
            case 3:
                return "Medical";
            case 3:
                return "Other";
            default:
                return "Unknown";
        }
    }

}
