import { TestBed, inject } from '@angular/core/testing';

import { TixByStatusService } from './tix-by-status.service';

describe('TixByStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TixByStatusService]
    });
  });

  it('should be created', inject([TixByStatusService], (service: TixByStatusService) => {
    expect(service).toBeTruthy();
  }));
});
