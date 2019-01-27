import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankPhotosComponent } from './rank-photos.component';

describe('RankPhotosComponent', () => {
  let component: RankPhotosComponent;
  let fixture: ComponentFixture<RankPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
