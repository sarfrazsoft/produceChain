import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
];

@Component({
  selector: 'app-buyer-dashboard-cart',
  templateUrl: './buyer-dashboard-cart.component.html',
  styleUrls: ['./buyer-dashboard-cart.component.scss']
})
export class BuyerDashboardCartComponent implements OnInit {

	commForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  	this.commForm = this.formBuilder.group({
  		comments: ['', Validators.required],
  	})
  }
	
	onSubmit () {
  	this.submitted = true;

  	if (this.commForm.invalid){
  		return;
  	}
  }

	counter: number = 1;

	onIncrement(): void {
		this.counter += 1;
	}

	onDecrement(): void {
		if (this.counter > 1)
		this.counter -= 1;
	}

	prodataSource = PRODUCTS;

  ngOnInit() {
  }

}
