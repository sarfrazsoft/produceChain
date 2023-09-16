import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardMessagesComponent } from './buyer-dashboard-messages.component';

describe('BuyerDashboardMessagesComponent', () => {
  let component: BuyerDashboardMessagesComponent;
  let fixture: ComponentFixture<BuyerDashboardMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
