import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-nav',
  templateUrl: './m-nav.component.html',
  styleUrls: ['./m-nav.component.css']
})
export class MNavComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {
  
    }

    toHome(){
      this.router.navigate(['mhome']);
    }

    logout(){
      this.router.navigate(['login']);
    }
  }
  