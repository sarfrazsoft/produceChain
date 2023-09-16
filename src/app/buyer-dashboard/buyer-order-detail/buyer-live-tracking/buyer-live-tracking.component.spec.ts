import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLiveTrackingComponent } from './buyer-live-tracking.component';

describe('BuyerLiveTrackingComponent', () => {
  let component: BuyerLiveTrackingComponent;
  let fixture: ComponentFixture<BuyerLiveTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerLiveTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLiveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
