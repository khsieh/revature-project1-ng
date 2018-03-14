import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewUserComponent } from './m-view-user.component';

describe('MViewUserComponent', () => {
  let component: MViewUserComponent;
  let fixture: ComponentFixture<MViewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MViewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
