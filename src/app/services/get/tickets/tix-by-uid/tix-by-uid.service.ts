import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TixByUidService {
    private url='http://localhost:8080/ExpenseReimbursementSystem/ticket';
    
    constructor(private httpClient:HttpClient) { }
    
    send(type:string, author:string){
        return this.httpClient.post(this.url,{type:type,author:author},{ responseType: 'text', observe: 'response' });
    }
    

}
