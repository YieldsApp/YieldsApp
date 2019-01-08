import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Column, CdtSettings, DataManager } from "../../../components/ng-crud-table/ng-crud-table";
import { DtMessages } from "../../../components/ng-crud-table/lib/dt-translate";
import { Validators } from '../../../components/ng-crud-table/lib/validation/validators';
import { CropTableService } from '../../../services/crop-table.service';
import { VarietyModel } from '../../../models/variety-model';
import { CropModel } from '../../../models/crop-model';

@Component({
  selector: 'ya-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss']
})
export class CropComponent implements OnInit {

  @ViewChild('cellTemplate') cellTemplate: TemplateRef<any>;

  //crop
  columns: Column[];
  dataManager: DataManager;
  selectedRow: CropModel;
  settings: CdtSettings = <CdtSettings>{
    crud: true,
    bodyHeight: 150,
    tableWidth: 600,
    rowHeight: 40,
    exportAction: true,
    globalFilter: true,
  };
  messages: DtMessages = <DtMessages>{
    titleDetailView: 'crop details',
    titleCreate: 'Create a new crop'
  };

  //variety
  dataManagerVarieties: DataManager;
  settingsVarieties: CdtSettings = <CdtSettings>{
    crud: true,
    bodyHeight: 150,
    tableWidth: 600,
    rowHeight: 40,
    exportAction: true,
    globalFilter: true,
  };
  messagesVarieties: DtMessages = <DtMessages>{
    titleDetailView: 'Variety details',
    titleCreate: 'Create a new variety'
  };
  columnsVarieties: Column[];

  constructor(private service: CropTableService, private router: Router) {

    this.columns = [
      {
        title: 'Id',
        name: 'cropId',
        sortable: false,
        filter: true,
        frozen: true,
        formHidden: true,
        type: 'number',
        tableHidden: true
  },
      {
        title: 'Crop Name',
        name: 'cropName',
        sortable: true,
        filter: true,
        frozen: true,
        width: 500,
        validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
        editable: true,
      }];
    this.dataManager = new DataManager(this.columns, this.settings, this.service, this.messages);
    this.dataManager.pager.perPage = 20;


    this.columnsVarieties = [
      {
        title: 'Id',
        name: 'cropId',
        sortable: false,
        filter: true,
        frozen: true,
        formHidden: true,
        type: 'number',
        tableHidden: true
      },
      {
        title: 'Id',
        name: 'varietyId',
        sortable: false,
        filter: true,
        frozen: true,
        formHidden: true,
        type: 'number',
        tableHidden: true
      },
      {
        title: 'Variety Name',
        name: 'varietyName',
        sortable: true,
        filter: true,
        frozen: true,
        width: 500,
        validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
        editable: true,
      },
  ];
    this.dataManagerVarieties = new DataManager(this.columnsVarieties, this.settingsVarieties, this.service, this.messagesVarieties);
  }

  ngOnInit() {
  }

  cropChanged() {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length > 0 && selection.length !== 0 && selection[0].varieties) {
      this.selectedRow = selection[0];
      this.dataManagerVarieties.rows = selection[0].varieties;
    }
    else {
      this.selectedRow = null;
      this.dataManagerVarieties.rows = [];
    }
  }
}
