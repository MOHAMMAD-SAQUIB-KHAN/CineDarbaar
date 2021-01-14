import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actordata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getActorData()
  }


  getActorData(){
    this.service.getApi('actor/actors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.actordata=res.items;
      console.log("actordata===>>>>>4",res)
    })
  }

}
