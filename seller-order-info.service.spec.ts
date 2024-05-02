import { TestBed } from '@angular/core/testing';

import { SellerOrderInfoService } from './seller-order-info.service';

describe('SellerOrderInfoService', () => {
  let service: SellerOrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerOrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
