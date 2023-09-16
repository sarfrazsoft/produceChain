import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent implements OnInit {

	firstFormGroup: FormGroup;

 	constructor(private http: HttpClient, private _formBuilder: FormBuilder) {}

	fileData: File = null;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
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
