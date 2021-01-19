import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sound-editor',
  templateUrl: './sound-editor.component.html',
  styleUrls: ['./sound-editor.component.css']
})
export class SoundEditorComponent implements OnInit {
  soundeditordata:any=[];
  forImageUrl: string='https://checkfast.herokuapp.com';
 
  constructor(public service:ApiService) { }

  ngOnInit() {
    this.getSoundEditorData()
  }

  getSoundEditorData(){
    this.service.getApi('sound_editor/sound_editors/?page=0&size=50',0).subscribe((res:any)=>{
      console.log("------>>>>",res)
      this.soundeditordata=res.items;
      console.log("soundeditordata===>>>>>",res)
    })
  }

}
