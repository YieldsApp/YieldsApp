import { Component, OnInit } from '@angular/core';
import { FieldModel } from "../../models/FieldModel";
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../services/farm.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent implements OnInit {

  title: string;
  field: FieldModel;
  isEditMode: boolean;
  constructor(route: ActivatedRoute, private farmService: FarmService, private router: Router) {

    this.title = "Edit Field";
    const farmId = route.snapshot.params['farmId'];
    const fieldId = route.snapshot.params['farmId'];

    farmService.getItem(farmId).subscribe(farm => {
      this.field = farm.fields.find(field => field.fieldId == fieldId);
      this.field.farmId = farmId;
      this.field.farmName = farm.farmName;
      if (!this.field.coordinates) this.field.coordinates = [];
    });
  }

  ngOnInit() {
  }



  onSubmit(field: FieldModel) {
    console.log(JSON.stringify((field)));
    this.farmService.put(field);

    this.router.navigate(['/farms']);
  }

}
