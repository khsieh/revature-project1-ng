import { TestBed, inject } from '@angular/core/testing';

import { UserByIdService } from './user-by-id.service';

describe('UserByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserByIdService]
    });
  });

  it('should be created', inject([UserByIdService], (service: UserByIdService) => {
    expect(service).toBeTruthy();
  }));
});
