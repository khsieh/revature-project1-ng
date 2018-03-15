import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ticket } from '../../../../models/ticket';

@Injectable()
export class UpdateTicketService {
    private url='http://localhost:8080/ExpenseReimbursementSystem/ticket';
    
    constructor(private httpClient:HttpClient) { }

    update(t:Ticket){
        console.log("in update Ticket");
        return this.httpClient.put(this.url,{type:"update",ticket:t},{ responseType: 'text', observe: 'response' });
    }
}
