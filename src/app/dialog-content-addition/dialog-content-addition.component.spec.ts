import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentAdditionComponent } from './dialog-content-addition.component';

describe('DialogContentAdditionComponent', () => {
  let component: DialogContentAdditionComponent;
  let fixture: ComponentFixture<DialogContentAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
