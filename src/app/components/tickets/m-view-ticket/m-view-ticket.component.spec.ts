import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewTicketComponent } from './m-view-ticket.component';

describe('MViewTicketComponent', () => {
  let component: MViewTicketComponent;
  let fixture: ComponentFixture<MViewTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MViewTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MViewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
