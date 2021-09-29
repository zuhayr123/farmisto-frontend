import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextInfoComponent } from './child-text-info.component';

describe('ChildTextInfoComponent', () => {
  let component: ChildTextInfoComponent;
  let fixture: ComponentFixture<ChildTextInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTextInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTextInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
