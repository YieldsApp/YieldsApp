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
  constructor(route: ActivatedRoute, private farmService: FarmService, private router: Router) {

    this.title = "Edit Field";
    const farmId = route.snapshot.params['farmId'];
    const fieldId = route.snapshot.params['fieldId'];

    farmService.getItem(farmId).subscribe(farm => {
      this.farm = farm;
      //TODO: to get only one field
      this.field = farm.fields.find(field => field.fieldId == fieldId);
      this.field.farmId = farmId;
      this.field.farmName = farm.farmName;
      if (!this.field.coordinates) this.field.coordinates = [];
    });
  }

  ngOnInit() {
  }



  onSubmit(field: FieldModel) {
    this.farmService.updateField(this.farm.farmId,field);
    this.router.navigate(['/farms']);
  }

}
