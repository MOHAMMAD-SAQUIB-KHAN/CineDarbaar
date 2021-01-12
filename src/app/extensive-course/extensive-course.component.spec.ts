import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensiveCourseComponent } from './extensive-course.component';

describe('ExtensiveCourseComponent', () => {
  let component: ExtensiveCourseComponent;
  let fixture: ComponentFixture<ExtensiveCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensiveCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensiveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
