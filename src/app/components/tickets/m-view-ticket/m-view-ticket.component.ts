import { Component, OnInit } from '@angular/core';
import { TixByUidService } from '../../../services/get/tickets/tix-by-uid/tix-by-uid.service';
import { Ticket } from '../../../models/ticket';
import { UpdateTicketService } from '../../../services/update/ticket/update-ticket/update-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-view-ticket',
  templateUrl: './m-view-ticket.component.html',
  styleUrls: ['./m-view-ticket.component.css']
})
export class MViewTicketComponent implements OnInit {
    tickets = [];
    toUpdate:Ticket;
    constructor(private viewService:TixByUidService, 
                private updateService:UpdateTicketService,
                private router:Router) { }

    ngOnInit() {
        this.generateCallAll();
    }

    generateCallAll(){
        // let uid = sessionStorage.getItem("uid");
        let type = "all";
        let sub = this.viewService.send(type,"0").subscribe(
            resp=>{
                let rbody = JSON.parse(resp.body);
                console.log(rbody.tickets);
                Array.prototype.forEach.call(rbody.tickets,element=>{
                    element["rStatus"]=this.convertStatus(element["rStatus"]);
                    element["rType"]=this.convertType(element["rType"]);
                    this.tickets.push(element);
                });
            },
            err=>{
                console.log(err.status);
            });
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

    convertStatusInt(s:string):number{
        switch(s){
            case "Pending":
                return 1;
            case "Approved":
                return 2;
            case "Denied":
                return 3;
            default:
                return 0;
        }
    }

    convertType(t:number):string{
        switch(t){
            case 1:
                return "Travel";
            case 2:
                return "Business";
            case 3:
                return "Medical";
            case 4:
                return "Other";
            default:
                return "Unknown";
        }
    }

    convertTypeInt(t:string):number{
        switch(t){
            case "Travel":
                return 1;
            case "Business":
                return 2;
            case "Medical":
                return 3;
            case "Other":
                return 4;
            default:
                return 0;
        }
    }

    approveTicket(t):void{
        console.log("Approving ticket...");
        console.log(t);
        t["rStatus"] = this.convertStatusInt(t["rStatus"]);
        t["rType"] = this.convertTypeInt(t["rType"]);
        this.updateService.update(t).subscribe(
            resp=>{
                console.log(resp.status);
                this.router.navigate(['man-viewTix']);
            },
            err=>{
                console.log(err.status);
            }
        );
    }
}
