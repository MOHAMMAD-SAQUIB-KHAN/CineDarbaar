import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-learn-by-profession',
  templateUrl: './learn-by-profession.component.html',
  styleUrls: ['./learn-by-profession.component.css']
})
export class LearnByProfessionComponent implements OnInit {
  forImageUrl: string='https://checkfast.herokuapp.com';
  courseByProfession: any=[];
  constructor(public service: ApiService) { }

  ngOnInit() {
    this.getCourseByProfessionData()
  }


  getCourseByProfessionData(){
    this.service.getApi('course_by_tutor/tutors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>6",res)
      this.courseByProfession=res.items;
      console.log("getCourseByProfession===>>>>>6",res)
    })
  }

}
