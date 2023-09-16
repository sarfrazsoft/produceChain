import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';

export interface UpcomingElement {
  order_no: number;
  product: string;
  origin: string;
  destination: string;
  est_shipping: string;
}

export interface PeriodicElement {
  order_no: number;
  product: string;
  origin: string;
  destination: string;
  est_shipping: string;
  status: string;
}

export interface ProduceElement {
  group: string;
  name: string;
  size: string;
  color: string;
  details: string;
  description: string;
  inventory: number;
  price_per_unit: string;
  label_details: string;
  growth_location: string;
  est_time_to_ship: string;
  shipping_details: string;
  notes: string;
  status: string;
}

const UPCOMING_ORDERS: UpcomingElement[] = [
  {order_no: 101, product: 'Hydrogen', origin: 'City A', destination: 'H', est_shipping: '5 days'},
  {order_no: 102, product: 'Helium', origin: 'City B', destination: 'He', est_shipping: '7 days'},
  {order_no: 103, product: 'Lithium', origin: 'City C', destination: 'Li', est_shipping: '9 days'},
  {order_no: 104, product: 'Beryllium', origin: 'City D', destination: 'Be', est_shipping: '2 days'},
  {order_no: 105, product: 'Boron', origin: 'City E', destination: 'B', est_shipping: '3 days'},

];

const CURRENT_ORDERS: PeriodicElement[] = [
  {order_no: 101, product: 'Hydrogen', origin: 'City A', destination: 'H', est_shipping: '5 days', status: 'Shipping'},
  {order_no: 102, product: 'Helium', origin: 'City B', destination: 'He', est_shipping: '7 days', status: 'Shipping'},
  {order_no: 103, product: 'Lithium', origin: 'City C', destination: 'Li', est_shipping: '9 days', status: 'Pending'},
  {order_no: 104, product: 'Beryllium', origin: 'City D', destination: 'Be', est_shipping: '2 days', status: 'Shipping'},
  {order_no: 105, product: 'Boron', origin: 'City E', destination: 'B', est_shipping: '3 days' , status: 'Shipping'},

];

const PRODUCE: ProduceElement[] = [
  {group: 'APPLES', name: 'GALA', size: 'MEDIUM', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'ATTACHED', status: 'ACTIVE'},
  {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},

  {group: 'APPLES', name: 'GALA', size: 'MEDIUM', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'ATTACHED', status: 'ACTIVE'},
  {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},
   {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},
];

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  uCdisplayedColumns: string[] = ['order_no', 'product', 'origin', 'destination', 'est_shipping'];
  ucdataSource = UPCOMING_ORDERS;
  
  cOdisplayedColumns: string[] = ['order_no', 'product', 'origin', 'destination', 'est_shipping', 'status'];
  codataSource = CURRENT_ORDERS;
    
  prodisplayedColumns: string[] = ['group', 'name', 'size', 'color', 'details', 'description', 'inventory', 'price_per_unit', 'label_details', 'growth_location', 'est_time_to_ship', 'shipping_details', 'notes', 'status'];
  prodataSource = PRODUCE;


  constructor(public dialog: MatDialog) {}

  dialogRef = this.dialog.open(WelcomeDialogComponent, {
      width: '55vw',
    });

  ngOnInit() {
  }

}