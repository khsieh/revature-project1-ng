import { Component, OnInit } from '@angular/core';
import { UserAllService } from '../../../services/get/users/user-all/user-all.service';

@Component({
  selector: 'app-m-view-user',
  templateUrl: './m-view-user.component.html',
  styleUrls: ['./m-view-user.component.css']
})
export class MViewUserComponent implements OnInit {

    users = [];

    constructor(private service:UserAllService) { }

    ngOnInit() {
        this.generateCallAll();
    }

    generateCallAll(){
        // let uid = sessionStorage.getItem("uid");
        let type = "all";
        let sub = this.service.viewUserByID("1").subscribe(
            resp=>{
                let rbody = JSON.parse(resp.body);
                console.log(rbody);
                this.users.push(rbody);
            },
            err=>{
                console.log(err.status);
            });
            sub = this.service.viewUserByID("2").subscribe(
                resp=>{
                    let rbody = JSON.parse(resp.body);
                    console.log(rbody);
                    this.users.push(rbody);
                },
                err=>{
                    console.log(err.status);
            });
            sub = this.service.viewUserByID("3").subscribe(
                resp=>{
                    let rbody = JSON.parse(resp.body);
                    console.log(rbody);
                    this.users.push(rbody);
                },
                err=>{
                    console.log(err.status);
            });
    }

    convertRole(s:number):string{
        switch(s){
            case 1:
                return "Employee";
            case 2:
                return "Manager";
            default:
                return "Unknown";
        }
    }
}
