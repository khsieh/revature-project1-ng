import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENavComponent } from './e-nav.component';

describe('ENavComponent', () => {
  let component: ENavComponent;
  let fixture: ComponentFixture<ENavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
