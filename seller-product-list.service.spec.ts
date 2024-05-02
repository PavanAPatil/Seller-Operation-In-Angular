import { TestBed } from '@angular/core/testing';

import { SellerProductListService } from './seller-product-list.service';

describe('SellerProductListService', () => {
  let service: SellerProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
