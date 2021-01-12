import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // router: any;
  // service: any;
  // tostr: any;
  // imageForm: any;
  // fb: any;
  

  constructor() { }

  ngOnInit() {}

  
  loggedin(){
    return localStorage.getItem('token');
    
  }
}
