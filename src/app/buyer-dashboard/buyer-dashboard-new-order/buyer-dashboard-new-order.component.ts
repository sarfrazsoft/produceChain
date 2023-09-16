import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

export interface ProductElement {
  group: string;
  type: string;
  code: number;
  rating: number;
  price_per_unit: number;
  image: string;
}

const PRODUCTS: ProductElement[] = [
	{group: 'Pineapple', type: 'sweet/tangy', code: 213, rating: 1, price_per_unit: 5, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 314, rating: 3, price_per_unit: 6, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 415, rating: 5, price_per_unit: 7, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 516, rating: 2, price_per_unit: 8, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 213, rating: 1, price_per_unit: 5, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 314, rating: 3, price_per_unit: 6, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 415, rating: 5, price_per_unit: 7, image: 'assets/images/products/pnimg1.png'},
	{group: 'Pineapple', type: 'sweet/tangy', code: 516, rating: 2, price_per_unit: 8, image: 'assets/images/products/pnimg1.png'},
];

@Component({
  selector: 'app-buyer-dashboard-new-order',
  templateUrl: './buyer-dashboard-new-order.component.html',
  styleUrls: ['./buyer-dashboard-new-order.component.scss']
})
export class BuyerDashboardNewOrderComponent implements OnInit {

 	counter: number = 1;

	firstFormGroup: FormGroup;

	prodataSource = PRODUCTS;

  constructor() {
  	// console.log(Object.keys(PRODUCTS).length);
  }

	onIncrement(): void {
		this.counter += 1;
	}

	onDecrement(): void {
		if (this.counter > 1)
		this.counter -= 1;
	}

  ngOnInit() {
  }

}
