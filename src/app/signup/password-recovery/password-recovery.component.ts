import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  signin2Form: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  	this.signin2Form = this.formBuilder.group({
  		email: ['', Validators.required],
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
