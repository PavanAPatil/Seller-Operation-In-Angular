import { TestBed } from '@angular/core/testing';

import { SupplierProductListService } from './supplier-product-list.service';

describe('SupplierProductListService', () => {
  let service: SupplierProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
