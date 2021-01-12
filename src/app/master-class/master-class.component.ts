import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.css']
})
export class MasterClassComponent implements OnInit {
  masterCourse: any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
  

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.getMasterData();
  }


  getMasterData(){
    this.service.getApi('master_course/masters/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>3",res)
      this.masterCourse=res.items;
      console.log("masterCourse===>>>>>3",res)
    })
  }

}

