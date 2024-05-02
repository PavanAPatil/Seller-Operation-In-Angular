import { TestBed } from '@angular/core/testing';

import { CategorywisePricelistService } from './categorywise-pricelist.service';

describe('CategorywisePricelistService', () => {
  let service: CategorywisePricelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorywisePricelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
