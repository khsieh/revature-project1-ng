import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  providers: [Ticket],
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {


    amount:number;
    description:string;
    receipt;
    selectedType;

    curDate: Date;
    constructor(private ticket:Ticket) { 
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
        this.ticket.status = 1;
        //these will be default when sent
        this.ticket.rID=0;
		this.ticket.submitted= "";
		this.ticket.resolved= "";
		this.ticket.resolver= 0;

    }

}
