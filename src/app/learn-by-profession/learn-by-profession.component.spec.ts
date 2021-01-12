import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnByProfessionComponent } from './learn-by-profession.component';

describe('LearnByProfessionComponent', () => {
  let component: LearnByProfessionComponent;
  let fixture: ComponentFixture<LearnByProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnByProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnByProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
