import { TestBed } from '@angular/core/testing';

import { BinaryRequestService } from './binary-request.service';

describe('BinaryRequestService', () => {
  let service: BinaryRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinaryRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
