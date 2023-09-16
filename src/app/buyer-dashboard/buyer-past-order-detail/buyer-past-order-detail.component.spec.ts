import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPastOrderDetailComponent } from './buyer-past-order-detail.component';

describe('BuyerPastOrderDetailComponent', () => {
  let component: BuyerPastOrderDetailComponent;
  let fixture: ComponentFixture<BuyerPastOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPastOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPastOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
