import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardOrdersComponent } from './buyer-dashboard-orders.component';

describe('BuyerDashboardOrdersComponent', () => {
  let component: BuyerDashboardOrdersComponent;
  let fixture: ComponentFixture<BuyerDashboardOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
