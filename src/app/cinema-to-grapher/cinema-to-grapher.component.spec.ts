import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaToGrapherComponent } from './cinema-to-grapher.component';

describe('CinemaToGrapherComponent', () => {
  let component: CinemaToGrapherComponent;
  let fixture: ComponentFixture<CinemaToGrapherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaToGrapherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaToGrapherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
