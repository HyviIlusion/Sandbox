import { TestBed } from '@angular/core/testing';

import { NavSectionService } from './nav-section.service';

describe('NavSectionService', () => {
  let service: NavSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
