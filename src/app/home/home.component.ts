import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  liveCourse: any=[];
  extensiveCourse:any=[];
  file: File =null;
  forImageUrl: string='https://checkfast.herokuapp.com';
  masterCourse: any=[];
  microCourse:any=[];
  courseBySubject:any=[];
  courseByProfession: any=[];

  

  constructor(public service: ApiService) { }

  ngOnInit() {
    this.getliveData();
    this.getExtensiveData();
    this.getMasterData();
    this.getMicroData();
    this. getCourseBySubjectData();
    this.getCourseByProfessionData()
   
  }
  getliveData() {
    this.service.getApi('live_course/lives/?page=0&size=50', 0).subscribe((res:any)=>{
      console.log("------>>>>1",res)
      this.liveCourse=res.items;
      console.log("responseData===>>>>>",res)
    })
  }

  getExtensiveData(){
    this.service.getApi('extensive_course/extensives/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>2",res)
      this.extensiveCourse=res.items;
      console.log("extensiveCourse===>>>>>2",res)
    })
  }

  getMasterData(){
    this.service.getApi('master_course/masters/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>3",res)
      this.masterCourse=res.items;
      console.log("masterCourse===>>>>>3",res)
    })
  }


  getMicroData(){
    this.service.getApi('micro_course/micros/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>4",res)
      this.microCourse=res.items;
      console.log("microCourse===>>>>>4",res)
    })
  }

  getCourseBySubjectData(){
    this.service.getApi('course_by_subject/subjects/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>5",res)
      this.courseBySubject=res.items;
      console.log("courseBySubject===>>>>>4",res)
    })
  }


  getCourseByProfessionData(){
    this.service.getApi('course_by_tutor/tutors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>6",res)
      this.courseByProfession=res.items;
      console.log("getCourseByProfession===>>>>>6",res)
    })
  }
  

  // ValidateFileUpload(event) {
  //   this.file = <File>event.target.files;
  //   this.onclick();
  //   console.log("files",this.file)
  // }

  // onclick() {
  //   const formData : FormData = new FormData();
  //   formData.append('file', this.file[0]);
  //   this.service.postApi('live_course/live', formData, 3).subscribe((res:any)=>{
  //     console.log("jkdfkjdvdsfyuvbjfbhjskb",res);
  //   })
  // }

}
