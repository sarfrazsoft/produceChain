import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewListingComponent } from './new-listing/new-listing.component';

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

const PRODUCE: ProduceElement[] = [
  {group: 'APPLES', name: 'GALA', size: 'MEDIUM', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'ATTACHED', status: 'ACTIVE'},
  {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},

  {group: 'APPLES', name: 'GALA', size: 'MEDIUM', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'ATTACHED', status: 'ACTIVE'},
  {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},
   {group: 'APPLES', name: 'PINK LADY', size: 'SMALL', color: 'RED', details: 'MISC', description: 'SWEET/TENGY', inventory: 1293, price_per_unit: '0.98/LB', label_details: 'NO LABELED', growth_location: 'JILK, MD', est_time_to_ship: '1 day', shipping_details: 'FOS', notes: 'NONE', status: 'ACTIVE'},
];

@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  styleUrls: ['./produce.component.scss']
})
export class ProduceComponent implements OnInit {

  prodisplayedColumns: string[] = ['group', 'name', 'size', 'color', 'details', 'description', 'inventory', 'price_per_unit', 'label_details', 'growth_location', 'est_time_to_ship', 'shipping_details', 'notes', 'status'];
  prodataSource = PRODUCE;

  constructor(public dialog: MatDialog) {}

  onClickMe() {
	  let dialogRef = this.dialog.open(NewListingComponent, {
	      width: '60vw',
	  });
  }

  ngOnInit() {
  }

}
