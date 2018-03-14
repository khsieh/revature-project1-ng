import { TestBed, inject } from '@angular/core/testing';

import { UpdateTicketService } from './update-ticket.service';

describe('UpdateTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTicketService]
    });
  });

  it('should be created', inject([UpdateTicketService], (service: UpdateTicketService) => {
    expect(service).toBeTruthy();
  }));
});
