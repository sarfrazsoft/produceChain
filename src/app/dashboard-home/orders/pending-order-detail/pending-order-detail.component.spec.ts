import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrderDetailComponent } from './pending-order-detail.component';

describe('PendingOrderDetailComponent', () => {
  let component: PendingOrderDetailComponent;
  let fixture: ComponentFixture<PendingOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
