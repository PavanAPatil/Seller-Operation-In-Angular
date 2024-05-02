import { TestBed } from '@angular/core/testing';

import { FranchiseLocalService } from './franchise-local.service';

describe('FranchiseLocalService', () => {
  let service: FranchiseLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchiseLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
