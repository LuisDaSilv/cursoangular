import { TestBed } from '@angular/core/testing';

import { Pizzasservice } from './pizzasservice';

describe('Pizzasservice', () => {
  let service: Pizzasservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pizzasservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
