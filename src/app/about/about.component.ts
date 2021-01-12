import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  homeSlider={items:1, nav:true ,lazyLoad: true,lazyLoadEager: 1,loop: false,dots: false,
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

  constructor() { }

  ngOnInit() {
  }

}
