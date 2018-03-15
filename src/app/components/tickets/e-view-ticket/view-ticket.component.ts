import { Component, OnInit } from '@angular/core';
import { TixByUidService } from '../../../services/get/tickets/tix-by-uid/tix-by-uid.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

    // cols = ["reimburseID", "amount", "description", "submitted", "resolved", "author","resolver","type","status"];
    tableContent=[];

    constructor(private viewService:TixByUidService) { }

    ngOnInit() {
        this.generateCallAll();
    }

    generateCallAll(){

        let uid = sessionStorage.getItem("uid");
        let type = "all";
        let sub = this.viewService.send(type,uid).subscribe(
            resp=>{
                let rbody = JSON.parse(resp.body);
                console.log(rbody.tickets);
                Array.prototype.forEach.call(rbody.tickets,element=>{
                    element["rStatus"]=this.convertStatus(element["rStatus"]);
                    element["rType"]=this.convertType(element["rType"]);
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
