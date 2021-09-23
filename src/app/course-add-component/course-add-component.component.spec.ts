import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponentComponent } from './course-add-component.component';

describe('CourseAddComponentComponent', () => {
  let component: CourseAddComponentComponent;
  let fixture: ComponentFixture<CourseAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
