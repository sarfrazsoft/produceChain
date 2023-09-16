import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardAccountComponent } from './buyer-dashboard-account.component';

describe('BuyerDashboardAccountComponent', () => {
  let component: BuyerDashboardAccountComponent;
  let fixture: ComponentFixture<BuyerDashboardAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
