import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCourseComponent } from './micro-course.component';

describe('MicroCourseComponent', () => {
  let component: MicroCourseComponent;
  let fixture: ComponentFixture<MicroCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
