import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {
  directordata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getDirectorData()
  }

  getDirectorData(){
    this.service.getApi('director/directors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.directordata=res.items;
      console.log("directordata===>>>>>",res)
    })
  }


}
