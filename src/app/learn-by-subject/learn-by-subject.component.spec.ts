import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBySubjectComponent } from './learn-by-subject.component';

describe('LearnBySubjectComponent', () => {
  let component: LearnBySubjectComponent;
  let fixture: ComponentFixture<LearnBySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnBySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
