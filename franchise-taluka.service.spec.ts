import { TestBed } from '@angular/core/testing';

import { FranchiseTalukaService } from './franchise-taluka.service';

describe('FranchiseTalukaService', () => {
  let service: FranchiseTalukaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchiseTalukaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
