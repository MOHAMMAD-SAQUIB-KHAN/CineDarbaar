import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmMakerComponent } from './film-maker.component';

describe('FilmMakerComponent', () => {
  let component: FilmMakerComponent;
  let fixture: ComponentFixture<FilmMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
