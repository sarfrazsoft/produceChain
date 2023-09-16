import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardRegisterComponent } from './buyer-dashboard-register.component';

describe('BuyerDashboardRegisterComponent', () => {
  let component: BuyerDashboardRegisterComponent;
  let fixture: ComponentFixture<BuyerDashboardRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
