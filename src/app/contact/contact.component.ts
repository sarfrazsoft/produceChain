import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  	this.contForm = this.formBuilder.group({
  		fname: ['', Validators.required],
  		lname: ['', Validators.required],
  		job: ['', Validators.required],
  		phone: ['', Validators.required],
  		email: ['', Validators.required],
  		state: ['', Validators.required],
  		company: ['', Validators.required],
  		oftype: ['', Validators.required],
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
