import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Column, CdtSettings, DataManager } from "../../components/ng-crud-table/ng-crud-table";
import { DtMessages } from "../../components/ng-crud-table/lib/dt-translate";
import { SelectItem } from '../../components/ng-crud-table/lib/common';
import { Validators } from '../../components/ng-crud-table/lib/validation/validators';
import { FarmService } from "../../services/farm.service";
import { Settings, Column as DataTableColumn, DataTable } from '../../components/ng-crud-table/ng-data-table';
import { FarmTableService } from '../../services/farm-table.service';
import { FieldModel } from '../../models/FieldModel';
import { FarmModel } from '../../models/farm-model';


@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})
export class FarmsComponent implements OnInit {
  @ViewChild('cellTemplate') cellTemplate: TemplateRef<any>;

  columns: Column[];
  dataManager: DataManager;

  dtFields: DataTable;
  columnsFields: DataTableColumn[];
  actionColumnField: number = 2;
  selectedRow: FarmModel;

  settingsFields: Settings = <Settings>{
    headerRowHeight: 40,
    rowHeight: 40,
    actionColumnWidth: 0
  };


  settings: CdtSettings = <CdtSettings>{
    crud: true,
    bodyHeight: 150,
    exportAction: true,
    globalFilter: true,
  };

  messages: DtMessages = <DtMessages>{
    titleDetailView: 'Farm details',
    titleCreate: 'Create a new farm'
  };

  constructor(private service: FarmTableService, private router: Router) {
    
    this.columns = [
        {
          title: 'Id',
          name: 'farmId',
          sortable: true,
          filter: true,
          frozen: true,
          width: 100,
          formHidden: true,
          type: 'number',
        },
        {
          title: 'Name',
          name: 'farmName',
          sortable: true,
          filter: true,
          frozen: true,
          width: 200,
          validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
          editable: true,
      },
      {
        title: 'Description',
        name: 'description',
        sortable: true,
        filter: true,
        frozen: true,
        width: 200,
        validatorFunc: Validators.get({ required: true, minLength: 2 }),
        editable: true,
      }];
    this.dataManager = new DataManager(this.columns, this.settings, this.service, this.messages);
    this.dataManager.pager.perPage = 20;

    
    this.columnsFields = [
      {
        title: 'Name',
        name: 'fieldName',
        sortable: true,
        filter: true,
        frozen: true,
        width: 200,
        validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
        editable: true,
      },
      {
        title: 'Area',
        name: 'area',
        sortable: true,
        filter: true,
        frozen: true,
        width: 200,
        validatorFunc: Validators.get({ required: true }),
        editable: true,
      }, {
        title: 'Actions',
        name: 'area',
        sortable: false,
        filter: false,
        frozen: true,
        width: 200
      }];
    this.dtFields = new DataTable(this.columnsFields, this.settingsFields);
  }

  ngOnInit() {
    //this.fieldsTable.rows = data;
    this.dtFields.events.onLoading(false);
    this.dtFields.columns[this.actionColumnField].cellTemplate = this.cellTemplate;
  }

  farmChanged() {
    const selection  = this.dataManager.getSelection();
    if (this.dataManager.rows.length > 0 && selection.length !== 0 && selection[0].fields) {
      this.selectedRow = selection[0];
      //debugger;
      this.dtFields.rows = selection[0].fields;
    }
    else {
      this.selectedRow = null;
      this.dtFields.rows = [];
    }
  }
  createAction() {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0)
      this.router.navigate(['/add-field', selection[0].farmId]);
  }

  editFieldAction(row: FieldModel) {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0)
      this.router.navigate(['/edit-field', selection[0].farmId, row.fieldId]);
  }

  deleteFieldAction(row: FieldModel) {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length && selection.length !== 0) {
      this.service.deleteField(selection[0].farmId, row.fieldId).then(result => {
        if (result) {
          this.dtFields.deleteRow(row as any);
        }
      });


    }

  }
}
