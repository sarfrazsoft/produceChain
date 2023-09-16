import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderDetailComponent } from './order-detail/order-detail.component';  
import { PendingOrderDetailComponent } from './pending-order-detail/pending-order-detail.component'; 
import { PastOrderDetailComponent } from './past-order-detail/past-order-detail.component'; 

export interface CurrentElement {
  order_no: number;
  customer: string;
  location: string;
  amount: number;
  date_placed: string;
  est_delivery: string;
  status: string;
}

const CURRENT_ORDERS: CurrentElement[] = [
  {order_no: 101, customer: 'Pydrogen', location: 'City A', amount: 57875, date_placed: '01-05-2019', est_delivery: '5 days', status: 'Preparing'},
  {order_no: 201, customer: 'Jydrogen', location: 'City B', amount: 67875, date_placed: '02-05-2019', est_delivery: '6 days', status: 'Shipping'},
  {order_no: 301, customer: 'Kydrogen', location: 'City C', amount: 77875, date_placed: '03-05-2019', est_delivery: '7 days', status: 'Shipping'},
  {order_no: 401, customer: 'Lydrogen', location: 'City D', amount: 87875, date_placed: '04-05-2019', est_delivery: '8 days', status: 'Shipping'},
  {order_no: 501, customer: 'Mydrogen', location: 'City E', amount: 97875, date_placed: '05-05-2019', est_delivery: '5 days', status: 'Preparing'},
];

export interface PendingElement {
  order_no: number;
  customer: string;
  location: string;
  amount: number;
  date_placed: string;
  est_delivery: string;
  status: string;
}

const PENDING_ORDERS: PendingElement[] = [
  {order_no: 101, customer: 'Pydrogen', location: 'City A', amount: 57875, date_placed: '01-05-2019', est_delivery: '5 days', status: 'waiting on delivery info.'},
  {order_no: 201, customer: 'Jydrogen', location: 'City B', amount: 67875, date_placed: '02-05-2019', est_delivery: '6 days', status: 'waiting customer approval'},
  {order_no: 301, customer: 'Kydrogen', location: 'City C', amount: 77875, date_placed: '03-05-2019', est_delivery: '7 days', status: 'waiting shipping info.'},
  {order_no: 401, customer: 'Lydrogen', location: 'City D', amount: 87875, date_placed: '04-05-2019', est_delivery: '8 days', status: 'Shipping'},
  {order_no: 501, customer: 'Mydrogen', location: 'City E', amount: 97875, date_placed: '05-05-2019', est_delivery: '5 days', status: 'Pending'},
];

export interface PastElement {
  order_no: number;
  customer: string;
  location: string;
  amount: number;
  date_placed: string;
  date_delivered: string;
  customer_rating: number;
}

const PAST_ORDERS: PastElement[] = [
  {order_no: 101, customer: 'Pydrogen', location: 'City A', amount: 57875, date_placed: '01-05-2019', date_delivered: '5 days', customer_rating: 1},
  {order_no: 201, customer: 'Jydrogen', location: 'City B', amount: 67875, date_placed: '02-05-2019', date_delivered: '6 days', customer_rating: 2},
  {order_no: 301, customer: 'Kydrogen', location: 'City C', amount: 77875, date_placed: '03-05-2019', date_delivered: '7 days', customer_rating: 3},
  {order_no: 401, customer: 'Lydrogen', location: 'City D', amount: 87875, date_placed: '04-05-2019', date_delivered: '8 days', customer_rating: 4},
  {order_no: 501, customer: 'Mydrogen', location: 'City E', amount: 97875, date_placed: '05-05-2019', date_delivered: '5 days', customer_rating: 5},
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

	title: string = 'My first AGM project';
  lat: number = 49.678418;
  lng: number = 9.809007;  
  lat2: number = 52.678418;
  lng2: number = 8.809007;

	currDisplayedColumns: string[] = ['order_no', 'customer', 'location', 'amount', 'date_placed', 'est_delivery', 'status'];
  currDataSource = new  MatTableDataSource(CURRENT_ORDERS);

	applyCurrFilter(filterValue: string) {
    this.currDataSource.filter = filterValue.trim().toLowerCase();
  }
  
  pendDisplayedColumns: string[] = ['order_no', 'customer', 'location', 'amount', 'date_placed', 'est_delivery', 'status'];
  pendDataSource = new  MatTableDataSource(PENDING_ORDERS);

  applyPendFilter(filterValue: string) {
    this.pendDataSource.filter = filterValue.trim().toLowerCase();
  }

  pastDisplayedColumns: string[] = ['order_no', 'customer', 'location', 'amount', 'date_placed', 'date_delivered', 'customer_rating'];
  pastDataSource = new  MatTableDataSource(PAST_ORDERS);

  applyPastFilter(filterValue: string) {
    this.pastDataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) {}

  onClickCurrent() {
    let dialogRef = this.dialog.open(OrderDetailComponent, {
        width: '60vw',
    });
  }

  onClickPendind() {
    let dialogRef = this.dialog.open(PendingOrderDetailComponent, {
        width: '60vw',
    });
  }  

  onClickPast() {
    let dialogRef = this.dialog.open(PastOrderDetailComponent, {
        width: '60vw',
    });
  }
  
  ngOnInit() {
  }

}
