import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardNewOrderComponent } from './buyer-dashboard-new-order.component';

describe('BuyerDashboardNewOrderComponent', () => {
  let component: BuyerDashboardNewOrderComponent;
  let fixture: ComponentFixture<BuyerDashboardNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
