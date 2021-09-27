import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentInfoComponent } from './add-content-info.component';

describe('AddContentInfoComponent', () => {
  let component: AddContentInfoComponent;
  let fixture: ComponentFixture<AddContentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
