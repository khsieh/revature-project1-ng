import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-nav',
  templateUrl: './e-nav.component.html',
  styleUrls: ['./e-nav.component.css']
})
export class ENavComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['login']);
  }
}
