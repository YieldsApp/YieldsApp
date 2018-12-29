import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldModel } from "../../models/FieldModel";
import { UnitsService } from "../../services/units.service";
import { FarmService } from '../../services/farm.service';

@Component({
  selector: 'ya-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent implements OnInit {

  @Input() field: FieldModel;
  @Output() onSave: EventEmitter<FieldModel> = new EventEmitter();
  fieldForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, public unit: UnitsService, private farmService: FarmService) {
    

  }

  ngOnInit() {
    this.fieldForm = this.formBuilder.group({
      fieldName: [this.field.fieldName, Validators.required],
      farmName: [this.field.farmName]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.fieldForm.controls; }

  locationChanged(data: { coordinates: any[], area: number }) {
    this.unit.convertGoogleMapUnits(data.area);
    this.field.coordinates = data.coordinates;
    this.field.area = data.area;
  }

  onSubmit() {
    this.submitted = true;
    if (this.fieldForm.invalid) {
      return;
    }
    this.field.fieldName = this.fieldForm.value.fieldName;
    this.onSave.emit(this.field);
  }
}
