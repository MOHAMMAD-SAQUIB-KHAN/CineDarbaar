import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-film-maker',
  templateUrl: './film-maker.component.html',
  styleUrls: ['./film-maker.component.css']
})
export class FilmMakerComponent implements OnInit {
  filmMakerdata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getfilmMakerData()
  }

  getfilmMakerData(){
    this.service.getApi('film_maker/filmmakers/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.filmMakerdata=res.items;
      console.log("filmMakerdata===>>>>>",res)
    })
  }

}
