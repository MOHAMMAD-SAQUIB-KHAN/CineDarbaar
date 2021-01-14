import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  writerdata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';

  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getWriterData()
  }

  getWriterData(){
    this.service.getApi('writer/writers/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.writerdata=res.items;
      console.log("writerdata===>>>>>4",res)
    })
  }

}
