import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cinema-to-grapher',
  templateUrl: './cinema-to-grapher.component.html',
  styleUrls: ['./cinema-to-grapher.component.css']
})
export class CinemaToGrapherComponent implements OnInit {
  cinematographerdata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getcinematographerData()
  }

  getcinematographerData(){
    this.service.getApi('cinematographer/cinematographers/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.cinematographerdata=res.items;
      console.log("cinematographerdata===>>>>>",res)
    })
  }

}
