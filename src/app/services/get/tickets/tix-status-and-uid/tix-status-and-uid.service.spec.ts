import { TestBed, inject } from '@angular/core/testing';

import { TixStatusAndUidService } from './tix-status-and-uid.service';

describe('TixStatusAndUidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TixStatusAndUidService]
    });
  });

  it('should be created', inject([TixStatusAndUidService], (service: TixStatusAndUidService) => {
    expect(service).toBeTruthy();
  }));
});
