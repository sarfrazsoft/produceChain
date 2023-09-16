import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BuyerLiveTrackingComponent } from './buyer-live-tracking/buyer-live-tracking.component'; 

export interface CurrentElement {
  product: string;
  size: string;
  amount: number;
  decription: string;
  price_per_unit: string;
  label_details: string;
  growth_location: string;
}
const CURRENT_ORDERS: CurrentElement[] = [
  { product: 'apples', size: 'medium', amount: 75, decription: 'sweet/tangy', price_per_unit: '0.98/LB', label_details: 'not labeled', growth_location: 'concord,pa', },
  { product: 'apples', size: 'small', amount: 57875, decription: 'sweet/tangy', price_per_unit: '0.78/LB', label_details: 'not labeled', growth_location: 'jilk,md', },  
  { product: 'apples', size: 'medium', amount: 75, decription: 'sweet/tangy', price_per_unit: '0.98/LB', label_details: 'not labeled', growth_location: 'concord,pa', },
  { product: 'apples', size: 'small', amount: 57875, decription: 'sweet/tangy', price_per_unit: '0.78/LB', label_details: 'not labeled', growth_location: 'jilk,md', },  
  { product: 'apples', size: 'medium', amount: 75, decription: 'sweet/tangy', price_per_unit: '0.98/LB', label_details: 'not labeled', growth_location: 'concord,pa', },
];

@Component({
  selector: 'app-buyer-order-detail',
  templateUrl: './buyer-order-detail.component.html',
  styleUrls: ['./buyer-order-detail.component.scss']
})
export class BuyerOrderDetailComponent implements OnInit {

	currDisplayedColumns: string[] = ['product', 'size', 'amount', 'decription', 'price_per_unit', 'label_details', 'growth_location'];
  currDataSource = new  MatTableDataSource(CURRENT_ORDERS);

  received: string = '3/25';
  approved: string = '3/25';
  packaged: string = '3/25';
  del2ship: string = '3/26';
  depaport: boolean = false;
  destport: boolean = false;
  delivered: boolean = false;
  
  constructor(public dialog: MatDialog) { }

  onClickLive() {
    let dialogRef = this.dialog.open(BuyerLiveTrackingComponent, {
        width: '70vw',
    });
  }

  ngOnInit() {
  }

}
