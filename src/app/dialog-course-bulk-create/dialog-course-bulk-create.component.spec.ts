import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCourseBulkCreateComponent } from './dialog-course-bulk-create.component';

describe('DialogCourseBulkCreateComponent', () => {
  let component: DialogCourseBulkCreateComponent;
  let fixture: ComponentFixture<DialogCourseBulkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCourseBulkCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCourseBulkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
