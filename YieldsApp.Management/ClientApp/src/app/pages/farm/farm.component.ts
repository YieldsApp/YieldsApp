import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldModel } from "../../models/FieldModel";
import { UnitsService } from "../../services/units.service";

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  fieldForm: FormGroup;
  submitted = false;
  title: string;
  field: FieldModel ;


  constructor(private formBuilder: FormBuilder,public unit: UnitsService) {
    this.route.snapshot.params['id']

  }

  ngOnInit() {
    this.field = new FieldModel();
    this.fieldForm = this.formBuilder.group({
      fieldName: ['', Validators.required]
    });
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.fieldForm.controls; }

  locationChanged(data: { coordinates: any[], area: number }) {
    debugger;


    this.unit.convertGoogleMapUnits(data.area);
    this.field.coordinates = data.coordinates;
    this.field.area = data.area;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.fieldForm.invalid) {
      return;
    }
    this.field.fieldName = this.fieldForm.value.fieldName;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.field));
  }



}
