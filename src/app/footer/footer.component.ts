import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subsForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  	this.subsForm = this.formBuilder.group({
  		email: ['', Validators.required]
  	})
  }

  onSubmit () {
  	this.submitted = true;

  	if (this.subsForm.invalid){
  		return;
  	}
  }

  ngOnInit() {
  }

}
