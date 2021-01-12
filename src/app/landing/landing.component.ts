import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  homeSlider={items:1, nav:true ,lazyLoad: true,lazyLoadEager: 1,loop: true,dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4
      },
      1600: {
        items: 5
      }
    }
  };
  forLoop: any=[];

  constructor(public service: ApiService) { }

  ngOnInit() {
    this.getallData();
  }
  getallData() {
    this.service.getApi('extensive_course/?page=0&size=50', 0).subscribe((res:any)=>{
      
      this.forLoop=res.items;
      console.log("responseData===>>>>>",res.items);
    })
  }

  

}
