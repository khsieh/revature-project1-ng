import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavComponent } from './m-nav.component';

describe('MNavComponent', () => {
  let component: MNavComponent;
  let fixture: ComponentFixture<MNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
