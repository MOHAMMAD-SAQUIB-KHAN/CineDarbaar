import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGrapherComponent } from './video-grapher.component';

describe('VideoGrapherComponent', () => {
  let component: VideoGrapherComponent;
  let fixture: ComponentFixture<VideoGrapherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGrapherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGrapherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
