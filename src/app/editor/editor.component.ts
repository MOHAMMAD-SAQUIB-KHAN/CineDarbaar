import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editordata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getEditorData()
  }

  getEditorData(){
    this.service.getApi('editor/editors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.editordata=res.items;
      console.log("editordata===>>>>>",res)
    })
  }

}
