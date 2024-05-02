import { TestBed } from '@angular/core/testing';

import { FranchiseDistrictService } from './franchise-district.service';

describe('FranchiseDistrictService', () => {
  let service: FranchiseDistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchiseDistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
