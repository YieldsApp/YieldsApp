import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  fieldForm: FormGroup;
  submitted = false;
  title: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fieldForm = this.formBuilder.group({
      fieldName: ['', Validators.required]
    });
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.fieldForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.fieldForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.fieldForm.value))
  }

}
