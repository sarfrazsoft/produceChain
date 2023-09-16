import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardCartComponent } from './buyer-dashboard-cart.component';

describe('BuyerDashboardCartComponent', () => {
  let component: BuyerDashboardCartComponent;
  let fixture: ComponentFixture<BuyerDashboardCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
