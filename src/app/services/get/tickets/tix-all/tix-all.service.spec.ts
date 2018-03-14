import { TestBed, inject } from '@angular/core/testing';

import { TixAllService } from './tix-all.service';

describe('TixAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TixAllService]
    });
  });

  it('should be created', inject([TixAllService], (service: TixAllService) => {
    expect(service).toBeTruthy();
  }));
});
