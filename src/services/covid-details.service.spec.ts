import { TestBed } from '@angular/core/testing';

import { CovidDetailsService } from './covid-details.service';

describe('CovidDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidDetailsService = TestBed.get(CovidDetailsService);
    expect(service).toBeTruthy();
  });
});
