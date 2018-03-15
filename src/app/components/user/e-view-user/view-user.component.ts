import { Component, OnInit } from '@angular/core';
import { UserByIdService } from '../../../services/get/users/user-by-id/user-by-id.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UpdateUserService } from '../../../services/update/user/update-user/update-user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

    constructor(private updateService:UpdateUserService,
                private service:UserByIdService, 
                private router:Router) { }

    user = new User();

    curUser;
    editFirst;
    editLast;
    editPass;
    editEmail;



    ngOnInit() {
        this.getUser();
    }

    getUser(){
        this.curUser = this.service.viewUserByID().subscribe(
            resp=>{
                // let respJson 
                this.curUser = JSON.parse(resp.body);
            },
            err=>{
                console.log("Error in loading user info " + err.status );
            }
        );
    }

    updateUser():void{
        //userid and username should not be changed
        this.user.userID = this.curUser.userID;
        console.log(this.user.userID);
        this.user.username = this.curUser.username;
        //check password
        if(this.editPass == undefined){
            console.log(this.curUser.password);
            this.user.password = this.curUser.password;
        }
        else{
            this.user.password = this.editPass;
        }
        //check first name
        if(this.editFirst == undefined){
            this.user.firstName = this.curUser.firstName;
        }
        else{
            this.user.firstName = this.editFirst;
        }
        //check last
        if(this.editLast == undefined){
            this.user.lastName = this.curUser.lastName;
        }
        else{
            this.user.lastName = this.editLast;
        }
        //check email
        if(this.editEmail == undefined){
            this.user.email = this.curUser.email;
        }
        else{
            this.user.email = this.editEmail;
        }
        //role should not be change here
        this.user.role = this.curUser.role;

        //sends it
        this.updateService.updateUser(this.user).subscribe(
            resp=>{
                console.log(resp.status);
                console.log("update success!");
                this.getUser();
            },
            err=>{
                console.log(err.status);   
            }
        );
        
    }

}

