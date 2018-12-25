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

  fieldsTable: DataTable;

  fieldsSettings: Settings =  {
    clientSide: true,
    columnResizeMode: 'aminated',
  } as any as  Settings;


  settings: CdtSettings = <CdtSettings>{
    crud: true,
    bodyHeight: 380,
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
          name: 'id',
          sortable: true,
          filter: true,
          frozen: true,
          width: 100,
          formHidden: true,
          type: 'number',
        },
        {
          title: 'Name',
          name: 'name',
          sortable: true,
          filter: true,
          frozen: true,
          width: 200,
          validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
          editable: true,
        }];
    this.dataManager = new DataManager(this.columns, this.settings, this.service, this.messages);
    this.dataManager.pager.perPage = 20;

    this.fieldsTable = new DataTable(this.columns, this.settings);

  }

  ngOnInit() {
    //this.fieldsTable.rows = data;
    this.fieldsTable.events.onLoading(false);
  }
  createAction() {
    const id = 1;
    this.router.navigate(['/farm', id]);
  }
}
