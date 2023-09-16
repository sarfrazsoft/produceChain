import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { MatAutocompleteSelectedEvent } from '@angular/material';

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
];

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {

	isHidden : boolean = false;
	isSelected : boolean = false;
	counter: number = 1;

	myControl = new FormControl();
  options: string[] = ['Apple', 'Pineapple', 'Grapes', 'Mangoes', 'Oranges'];
	filteredOptions: Observable<string[]>;

	prodataSource = PRODUCTS;

	onSrchClick() {
		this.isHidden = true;

	}

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
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
	}

	onSelectionChanged(event: MatAutocompleteSelectedEvent) {
		this.isSelected = true;
		console.log(this.isSelected);
	  console.log(event.option.value);
	}

}
