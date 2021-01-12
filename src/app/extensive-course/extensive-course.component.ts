import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-extensive-course',
  templateUrl: './extensive-course.component.html',
  styleUrls: ['./extensive-course.component.css']
})
export class ExtensiveCourseComponent implements OnInit {
  extensiveCourse:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service: ApiService) { }

  ngOnInit() {
    this.getExtensiveData();
  }

  getExtensiveData(){
    this.service.getApi('extensive_course/extensives/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>2",res)
      this.extensiveCourse=res.items;
      console.log("extensiveCourse===>>>>>2",res.items)
    })
  }

}
