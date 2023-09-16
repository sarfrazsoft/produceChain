import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer-dashboard-account',
  templateUrl: './buyer-dashboard-account.component.html',
  styleUrls: ['./buyer-dashboard-account.component.scss']
})
export class BuyerDashboardAccountComponent implements OnInit {

 	contForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  	this.contForm = this.formBuilder.group({
  		acc_tit: ['', Validators.required],
  		user_id: ['', Validators.required],
  		bus_add: ['', Validators.required],
  		cont_no: ['', Validators.required],
  		verif_d: ['', Validators.required],
  		state: ['', Validators.required],
  		company: ['', Validators.required],
  		oftype: ['', Validators.required],
      propho: ['', Validators.required],
  	})
  }

  onSubmit () {
  	this.submitted = true;

  	if (this.contForm.invalid){
  		return;
  	}
  }

  ngOnInit() {
  }

}
