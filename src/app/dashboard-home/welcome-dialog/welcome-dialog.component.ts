import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class WelcomeDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private http: HttpClient, private _formBuilder: FormBuilder) {}

	fileData: File = null;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
	 
	fileProgress(fileInput: any) {
	    this.fileData = <File>fileInput.target.files[0];
	}
	 
	onSubmit() {
	    const formData = new FormData();
	    formData.append('file', this.fileData);
	    this.http.post('url/to/your/api', formData)
	      .subscribe(res => {
	        console.log(res);
	        alert('SUCCESS !!');
	      })
	}

}
