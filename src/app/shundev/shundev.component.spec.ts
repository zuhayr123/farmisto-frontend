import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShundevComponent } from './shundev.component';

describe('ShundevComponent', () => {
  let component: ShundevComponent;
  let fixture: ComponentFixture<ShundevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShundevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShundevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
