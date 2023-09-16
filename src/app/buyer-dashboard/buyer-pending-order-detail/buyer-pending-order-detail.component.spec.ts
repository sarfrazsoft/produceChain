import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPendingOrderDetailComponent } from './buyer-pending-order-detail.component';

describe('BuyerPendingOrderDetailComponent', () => {
  let component: BuyerPendingOrderDetailComponent;
  let fixture: ComponentFixture<BuyerPendingOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPendingOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPendingOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
