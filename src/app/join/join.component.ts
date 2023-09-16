import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  joinForm: FormGroup;
  submitted = false;
  success = false;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {
  	this.joinForm = this.formBuilder.group({
  		company: ['', Validators.required],
  		email: ['', Validators.required],
  		password: ['', Validators.required],
  		userid: ['', Validators.required],
  		tos: ['', Validators.required],
  	})
  }

  onSubmit () {
  	this.submitted = true;
    this.router.navigate(['/dashboard-home']);

  	if (this.joinForm.invalid){
  		return;
  	}
    
  }

  ngOnInit() {
  }
}
