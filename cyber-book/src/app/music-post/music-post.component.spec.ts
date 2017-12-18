import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPostComponent } from './music-post.component';

describe('MusicPostComponent', () => {
  let component: MusicPostComponent;
  let fixture: ComponentFixture<MusicPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
