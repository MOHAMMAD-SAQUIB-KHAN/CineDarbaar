import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-live-course',
  templateUrl: './live-course.component.html',
  styleUrls: ['./live-course.component.css']
})
export class LiveCourseComponent implements OnInit {
  liveCourse: any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service: ApiService) { }


  ngOnInit() {
    this.getliveData();
  }

  getliveData() {
    this.service.getApi('live_course/lives/?page=0&size=50', 0).subscribe((res:any)=>{
      console.log("------>>>>1",res)
      this.liveCourse=res.items;
      console.log("responseData===>>>>>",res)
    })
  }

}
