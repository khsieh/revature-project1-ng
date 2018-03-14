import { TestBed, inject } from '@angular/core/testing';

import { InsertTicketService } from './insert-ticket.service';

describe('InsertTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertTicketService]
    });
  });

  it('should be created', inject([InsertTicketService], (service: InsertTicketService) => {
    expect(service).toBeTruthy();
  }));
});
