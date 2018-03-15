import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    fusername: string;
    fpassword: string;

    constructor(private loginService:LoginService, private router:Router) { }

    ngOnInit() {
    }

    //
    validate():void {
        this.loginService.validateUser(this.fusername,this.fpassword).subscribe(
            resp=>{
                // console.log(resp);
                let respJson = JSON.parse(resp.body);
                // console.log(respondeBody.uid);
                // console.log(respondeBody.firstname);
                
                sessionStorage.setItem("uid", respJson.uid);
                sessionStorage.setItem("firstname", respJson.firstname);
                sessionStorage.setItem("lastname", respJson.lastname);
                sessionStorage.setItem("rid", respJson.rid);
                // sessionStorage.setItem("curUser",JSON.stringify(resp.body));
                // let s = sessionStorage.getItem("lastname");
                
                // console.log(s);
                console.log(resp.status);
                if(resp.status == 211){
                    console.log("This is a Employee");
                    this.router.navigate(['ehome']);
                }
                else if (resp.status == 212){
                    console.log("This is a manager");
                    this.router.navigate(['mhome']);
                }
            },
            err=>{
                //show alert??
                console.log(err.status);
            }
        );
    }

}
