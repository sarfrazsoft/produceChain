import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

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
  selector: 'app-buyer-past-order-detail',
  templateUrl: './buyer-past-order-detail.component.html',
  styleUrls: ['./buyer-past-order-detail.component.scss']
})
export class BuyerPastOrderDetailComponent implements OnInit {

  currDisplayedColumns: string[] = ['product', 'size', 'amount', 'decription', 'price_per_unit', 'label_details', 'growth_location'];
  currDataSource = new  MatTableDataSource(CURRENT_ORDERS);

  constructor() { }

  ngOnInit() {
  }

}
