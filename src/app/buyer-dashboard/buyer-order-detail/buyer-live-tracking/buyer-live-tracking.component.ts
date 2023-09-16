import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer-live-tracking',
  templateUrl: './buyer-live-tracking.component.html',
  styleUrls: ['./buyer-live-tracking.component.scss']
})
export class BuyerLiveTrackingComponent implements OnInit {

	title: string = 'My first AGM project';
  lat: number = 49.678418;
  lng: number = 9.809007;  
  lat2: number = 52.678418;
  lng2: number = 8.809007;

	updForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  	this.updForm = this.formBuilder.group({
  		update: ['', Validators.required],
  		checkb: ['', Validators.required],
  	})
  }

  onSubmit () {
  	this.submitted = true;

  	if (this.updForm.invalid){
  		return;
  	}
  }
  ngOnInit() {
  }
  
}
