import { TestBed } from '@angular/core/testing';

import { MarketRateService } from './market-rate.service';

describe('MarketRateService', () => {
  let service: MarketRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
