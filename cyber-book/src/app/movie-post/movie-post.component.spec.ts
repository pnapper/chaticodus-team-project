import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePostComponent } from './movie-post.component';

describe('MoviePostComponent', () => {
  let component: MoviePostComponent;
  let fixture: ComponentFixture<MoviePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
