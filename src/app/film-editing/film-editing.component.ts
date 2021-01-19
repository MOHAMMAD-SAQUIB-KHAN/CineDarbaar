import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-film-editing',
  templateUrl: './film-editing.component.html',
  styleUrls: ['./film-editing.component.css']
})
export class FilmEditingComponent implements OnInit {
  filmEiditingdata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getFilmEiditingData()
  }

  getFilmEiditingData(){
    this.service.getApi('film_editing/film_editings/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.filmEiditingdata=res.items;
      console.log("filmEiditingdata===>>>>>",res)
    })
  }

}
