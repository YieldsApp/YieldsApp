import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CropService } from '../../services/crop.service';
import { CropModel } from '../../models/CropModel';


@Component({
  selector: 'app-select-crop',
  templateUrl: './select-crop.component.html',
  styleUrls: ['./select-crop.component.scss']
})
export class SelectCropComponent implements OnInit {
  selctedCrop: CropModel;

  results: string[];

  constructor(public cropService: CropService) { }

  ngOnInit() {
  }
  
  search(event) {
    this.cropService.getCropList().subscribe((result: CropModel[]) => {
      this.results = _.filter(result, (crop) => _.includes(crop.cropName, event.query));
    }, error => console.error(error));
    //this.results = _.filter(this.vegetables, (vegetable) => _.includes(vegetable, event.query));
  }
}

