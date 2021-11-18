import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentControlScreenComponent } from './content-control-screen.component';

describe('ContentControlScreenComponent', () => {
  let component: ContentControlScreenComponent;
  let fixture: ComponentFixture<ContentControlScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentControlScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentControlScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
