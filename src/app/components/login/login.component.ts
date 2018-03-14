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
