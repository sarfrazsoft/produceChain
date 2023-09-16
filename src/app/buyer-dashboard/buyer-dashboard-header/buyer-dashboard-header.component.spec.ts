import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardHeaderComponent } from './buyer-dashboard-header.component';

describe('BuyerDashboardHeaderComponent', () => {
  let component: BuyerDashboardHeaderComponent;
  let fixture: ComponentFixture<BuyerDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
