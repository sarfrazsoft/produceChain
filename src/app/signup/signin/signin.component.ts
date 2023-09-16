import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signin2Form: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  	this.signin2Form = this.formBuilder.group({
  		email: ['', Validators.required],
  		password: ['', Validators.required],
  	})
  }

  onSubmit () {
  	this.submitted = true;
    this.router.navigate(['/dashboard-home']);

  	if (this.signin2Form.invalid){
  		return;
  	}
  }

  ngOnInit() {
  }

}
