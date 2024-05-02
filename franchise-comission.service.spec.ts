import { TestBed } from '@angular/core/testing';

import { FranchiseComissionService } from './franchise-comission.service';

describe('FranchiseComissionService', () => {
  let service: FranchiseComissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchiseComissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
