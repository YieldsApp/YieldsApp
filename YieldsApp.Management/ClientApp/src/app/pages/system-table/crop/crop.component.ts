import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Column, CdtSettings, DataManager } from "../../../components/ng-crud-table/ng-crud-table";
import { DtMessages } from "../../../components/ng-crud-table/lib/dt-translate";
import { SelectItem } from '../../../components/ng-crud-table/lib/common';
import { Validators } from '../../../components/ng-crud-table/lib/validation/validators';
import { CropService } from "../../../services/crop.service";
import { Settings, Column as DataTableColumn, DataTable } from '../../../components/ng-crud-table/ng-data-table';
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
        width: 100,
        formHidden: true,
        type: 'number',
        tableHidden: true
  },
      {
        title: 'Name',
        name: 'cropName',
        sortable: true,
        filter: true,
        frozen: true,
        width: 200,
        validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
        editable: true,
      }];
    this.dataManager = new DataManager(this.columns, this.settings, this.service, this.messages);
    this.dataManager.pager.perPage = 20;


    this.columnsVarieties = [
      {
        title: 'Id',
        name: 'varietyId',
        sortable: false,
        filter: true,
        frozen: true,
        width: 100,
        formHidden: true,
        type: 'number',
        tableHidden: true
      },
      {
        title: 'Name',
        name: 'varietyName',
        sortable: true,
        filter: true,
        frozen: true,
        width: 200,
        validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
        editable: true,
      },
  ];
    this.dataManager = new DataManager(this.columnsVarieties, this.settingsVarieties, this.service, this.messagesVarieties);
  }

  ngOnInit() {
  }

  cropChanged() {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length > 0 && selection.length !== 0 && selection[0].varieties) {
      this.selectedRow = selection[0];
      //debugger;
      this.dataManager.rows = selection[0].varieties;
    }
    else {
      this.selectedRow = null;
      this.dataManager.rows = [];
    }
  }
  createAction() {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0)
      this.router.navigate(['/add-variety', selection[0].cropId]);
  }

  editVarietyAction(row: VarietyModel) {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0)
      this.router.navigate(['/edit-variety', selection[0].cropId, row.varietyId]);
  }

  deleteVarietyAction(row: VarietyModel) {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0) {
      this.service.deleteVariety(selection[0].cropId, row.varietyId).then(result => {
        if (result) {
          this.dataManager.deleteRow(row as any);
        }
      });


    }

  }

}
