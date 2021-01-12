import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmEditingComponent } from './film-editing.component';

describe('FilmEditingComponent', () => {
  let component: FilmEditingComponent;
  let fixture: ComponentFixture<FilmEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
