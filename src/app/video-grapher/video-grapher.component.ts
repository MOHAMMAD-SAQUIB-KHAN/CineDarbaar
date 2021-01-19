import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-video-grapher',
  templateUrl: './video-grapher.component.html',
  styleUrls: ['./video-grapher.component.css']
})
export class VideoGrapherComponent implements OnInit {
  videographerdata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getVideographerData()
  }

  getVideographerData(){
    this.service.getApi('videographer/vidographers/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.videographerdata=res.items;
      console.log("videographerdata===>>>>>",res)
    })
  }

}
