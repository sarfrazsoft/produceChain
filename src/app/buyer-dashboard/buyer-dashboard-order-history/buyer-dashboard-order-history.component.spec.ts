import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardOrderHistoryComponent } from './buyer-dashboard-order-history.component';

describe('BuyerDashboardOrderHistoryComponent', () => {
  let component: BuyerDashboardOrderHistoryComponent;
  let fixture: ComponentFixture<BuyerDashboardOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardOrderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
