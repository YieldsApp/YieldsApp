import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Column, CdtSettings, DataManager } from "../../components/ng-crud-table/ng-crud-table";
import { DtMessages } from "../../components/ng-crud-table/lib/dt-translate";
import { SelectItem } from '../../components/ng-crud-table/lib/common';
import { Validators } from '../../components/ng-crud-table/lib/validation/validators';
import { FarmService } from "../../services/farm.service";
import { Settings, DataTable } from '../../components/ng-crud-table/ng-data-table';



@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})
export class FarmsComponent implements OnInit {
  columns: Column[];
  dataManager: DataManager;

  dtFields: DataTable;
  columnsFields: Column[];
  settingsFields: Settings = <Settings>{
    bodyHeight: 150,
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

  constructor(private service: FarmService, private router: Router) {

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
        title: 'Id',
        name: 'fieldId',
        sortable: true,
        filter: true,
        frozen: true,
        width: 100,
        formHidden: true,
        type: 'number',
      },
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
      }];
    this.dtFields = new DataTable(this.columnsFields, this.settingsFields);


  }

  ngOnInit() {
    //this.fieldsTable.rows = data;
    this.dtFields.events.onLoading(false);
  }

  farmChanged() {
    const selection = this.dataManager.getSelection();
    if (this.dataManager.rows.length > 0 && selection.length !== 0 && selection[0].fields) {
      //debugger;
      this.dtFields.rows = selection[0].fields;
    }
    else {
      this.dtFields.rows = [];
    }
  }
  createAction() {
    const id = 1;
    this.router.navigate(['/farm', id]);
  }
}
