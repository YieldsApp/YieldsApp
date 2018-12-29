import { Component, OnInit } from '@angular/core';
import { FieldModel } from "../../models/FieldModel";
import { ActivatedRoute, Router } from '@angular/router';
import { FarmService } from '../../services/farm.service';
import { FarmModel } from '../../models/farm-model';

@Component({
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent implements OnInit {

  title: string;
  field: FieldModel;
  isEditMode: boolean;
  constructor(route: ActivatedRoute, private farmService: FarmService, private router: Router) {

    this.title = "Add Field";
    const farmId = route.snapshot.params['farmId'];

    farmService.getItem(farmId).subscribe(farm => {
      this.field = new FieldModel();
      this.field.farmId = farmId;
      this.field.farmName = farm.farmName;
    });
  }

  ngOnInit() {
  }



  onSubmit(field: FieldModel) {

    this.farmService.post(field);

    this.router.navigate(['/farms']);
  }

}
