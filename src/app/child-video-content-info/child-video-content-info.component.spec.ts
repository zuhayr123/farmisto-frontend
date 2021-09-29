import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildVideoContentInfoComponent } from './child-video-content-info.component';

describe('ChildVideoContentInfoComponent', () => {
  let component: ChildVideoContentInfoComponent;
  let fixture: ComponentFixture<ChildVideoContentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildVideoContentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildVideoContentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
