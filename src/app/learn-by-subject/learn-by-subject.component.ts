import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-learn-by-subject',
  templateUrl: './learn-by-subject.component.html',
  styleUrls: ['./learn-by-subject.component.css']
})
export class LearnBySubjectComponent implements OnInit {
  courseBySubject:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service: ApiService) { }

  ngOnInit() {
    this. getCourseBySubjectData();
    
  }

  getCourseBySubjectData(){
    this.service.getApi('course_by_subject/subjects/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>5",res)
      this.courseBySubject=res.items;
      console.log("courseBySubject===>>>>>4",res)
    })
  }

}
