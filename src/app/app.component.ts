import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:  `  <app-header></app-header>
                <router-outlet></router-outlet>
                 <app-footer></app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CineDarbaar';
  router: any;
  constructor(public route:Router){}

  // showHeaderB(){
  //   if(this.router.url.startsWith('/landing/')){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

}
 


