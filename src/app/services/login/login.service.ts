import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/add/operator/map'; 

@Injectable()
export class LoginService {

    private url='http://localhost:8080/ExpenseReimbursementSystem/login';

    constructor(private httpClient:HttpClient) {
    }

    validateUser(usr:string, pw:string){
        return this.httpClient.post(this.url, {username:usr, password: pw},{ responseType: 'text', observe: 'response' });
    }

}
