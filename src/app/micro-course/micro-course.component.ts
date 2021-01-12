import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-micro-course',
  templateUrl: './micro-course.component.html',
  styleUrls: ['./micro-course.component.css']
})
export class MicroCourseComponent implements OnInit {

  constructor(public service: ApiService) { }
  microCourse:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  ngOnInit() {
    this.getMicroData();
  }

  getMicroData(){
    this.service.getApi('micro_course/micros/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>4",res)
      this.microCourse=res.items;
      console.log("microCourse===>>>>>4",res)
    })
  }

}
