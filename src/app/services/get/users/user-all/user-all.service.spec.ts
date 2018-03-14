import { TestBed, inject } from '@angular/core/testing';

import { UserAllService } from './user-all.service';

describe('UserAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAllService]
    });
  });

  it('should be created', inject([UserAllService], (service: UserAllService) => {
    expect(service).toBeTruthy();
  }));
});
