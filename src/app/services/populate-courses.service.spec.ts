import { TestBed } from '@angular/core/testing';

import { PopulateCoursesService } from './populate-courses.service';

describe('PopulateCoursesService', () => {
  let service: PopulateCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulateCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
