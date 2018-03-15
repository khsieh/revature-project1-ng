import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../../../models/ticket';
import { InsertTicketService } from '../../../services/insert/insert-ticket/insert-ticket.service';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {
    ticket = new Ticket();

    amount:number;
    description:string;
    receipt;
    selectedType;

    curDate: Date;
    constructor(private insertTicketService:InsertTicketService, private router:Router) { 
      setInterval(()=> {this.curDate = new Date(); }, 1000);
    }

    ngOnInit() {
    }

    sendTicket():void{
        this.ticket.amount = this.amount;
        this.ticket.description = this.description;
        this.ticket.receipt = this.receipt;
        let authorID = sessionStorage.getItem("uid");   
        this.ticket.author = parseInt(authorID);//get from localstorage
        this.ticket.type = this.selectedType;
        // console.log(this.selectedType);
        this.ticket.status = 1;
        //these will be default when sent
        this.ticket.rID=0;
        this.insertTicketService.insertTicket(this.ticket).subscribe(
            resp=>{
                console.log(resp.status);
                if(resp.status == 200){
                    this.router.navigate(['emp-reimbursements']);
                }
            },
            err=>{
                console.log(err.status);
            }
        );
    }

}
