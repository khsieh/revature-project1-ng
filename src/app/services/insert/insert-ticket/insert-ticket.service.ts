import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ticket } from '../../../models/ticket';

@Injectable()
export class InsertTicketService {
    
    private url='http://localhost:8080/ExpenseReimbursementSystem/ticket';
    
    constructor(private httpClient:HttpClient) { }

    insertTicket(ticket:Ticket){
        this.httpClient.put(this.url,{type:"submit","ticket":ticket});
    }

}
