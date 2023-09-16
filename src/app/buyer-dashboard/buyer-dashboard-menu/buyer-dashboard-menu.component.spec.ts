import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardMenuComponent } from './buyer-dashboard-menu.component';

describe('BuyerDashboardMenuComponent', () => {
  let component: BuyerDashboardMenuComponent;
  let fixture: ComponentFixture<BuyerDashboardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
