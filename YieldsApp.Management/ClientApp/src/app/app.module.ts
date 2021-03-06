import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//packages
import { AgmCoreModule } from '@agm/core';
import { CrudTableModule } from './components/ng-crud-table/ng-crud-table';
import { DataTableModule } from './components/ng-crud-table/ng-data-table';

//primeng
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { EditFieldComponent } from './components/edit-field/edit-field.component';
import { AddFieldComponent } from './pages/add-field/add-field.component';
import { EditFieldComponent as EditFieldPage } from './pages/edit-field/edit-field.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CropComponent } from './pages/system-table/crop/crop.component';
import { CoreModule } from './core/core.module';
import { DataApiService } from './core/services/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    LocationComponent,
    FarmsComponent,
    EditFieldComponent,
    AddFieldComponent,
    EditFieldPage,
    CropComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AutoCompleteModule,
    AppRoutingModule,
    CrudTableModule,
    DataTableModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
      libraries: ['places', 'drawing', 'geometry'],

    })

  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
