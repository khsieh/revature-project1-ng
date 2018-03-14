import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

    amount:number;
    description:string;
    receipt;

    types = [
        {key:'Travel',val:'1'}, 
        {key:'Business',val:'2'}, 
        {key:'Medical',val:'3'}, 
        {key:'Other',val:'4'}
    ];

    selectedType = this.types[1].val;

    constructor() { }

    ngOnInit() {
    }

}
