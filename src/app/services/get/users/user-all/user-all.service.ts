import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserAllService {

  private url='http://localhost:8080/ExpenseReimbursementSystem/user';

  constructor(private httpClient:HttpClient) { }

  viewUserByID(uid:string){
      
      return this.httpClient.post(this.url,{uid},{ responseType: 'text', observe: 'response' });
  } 
}
