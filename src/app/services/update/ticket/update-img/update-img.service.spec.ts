import { TestBed, inject } from '@angular/core/testing';

import { UpdateImgService } from './update-img.service';

describe('UpdateImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateImgService]
    });
  });

  it('should be created', inject([UpdateImgService], (service: UpdateImgService) => {
    expect(service).toBeTruthy();
  }));
});
