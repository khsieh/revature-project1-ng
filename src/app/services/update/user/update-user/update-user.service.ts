import { Injectable } from '@angular/core';
import { User } from '../../../../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UpdateUserService {
    private url='http://localhost:8080/ExpenseReimbursementSystem/user';
    
    constructor(private httpClient:HttpClient) { }
    
    updateUser(user:User){
        return this.httpClient.put(this.url, user,{ responseType: 'text', observe: 'response' });
    }

}
