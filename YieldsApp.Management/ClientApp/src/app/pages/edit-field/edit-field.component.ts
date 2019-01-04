import { Component, OnInit } from '@angular/core';
import { FieldModel } from "../../models/FieldModel";
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../services/farm.service';
import { Router } from '@angular/router';
import { FarmModel } from '../../models/farm-model';

import _ from 'lodash';

@Component({
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent implements OnInit {

  title: string;
  field: FieldModel;
  isEditMode: boolean;
  farm: FarmModel;
  fieldName: string;
  constructor(route: ActivatedRoute, private farmService: FarmService, private router: Router) {

    this.title = "Edit Field";
    const farmId = route.snapshot.params['farmId'];
    this.fieldName = route.snapshot.params['fieldName'];
    debugger;
    farmService.getItem(farmId).subscribe(farm => {
      this.farm = farm;
      this.field = farm.fields.find(field => field.fieldName == this.fieldName);
      this.field.farmId = farmId;
      this.field.farmName = farm.farmName;
      if (!this.field.coordinates) this.field.coordinates = [];
    });
  }

  ngOnInit() {
  }



  onSubmit(field: FieldModel) {
    this.farm.fields = this.farm.fields ? this.farm.fields : [];
    const index  = _.findIndex(this.farm.fields,{ fieldName: this.fieldName });
    this.farm.fields.splice(index, 1, field);
    this.farmService.put(this.farm);

    this.router.navigate(['/farms']);
  }

}
