import { TestBed, inject } from '@angular/core/testing';

import { TixByUidService } from './tix-by-uid.service';

describe('TixByUidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TixByUidService]
    });
  });

  it('should be created', inject([TixByUidService], (service: TixByUidService) => {
    expect(service).toBeTruthy();
  }));
});
