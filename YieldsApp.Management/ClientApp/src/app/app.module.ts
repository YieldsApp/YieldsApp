import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//packages
import { AgmCoreModule } from '@agm/core';
import { CrudTableModule } from './ng-crud-table/ng-crud-table';

//primeng
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SelectCropComponent } from './pages/select-crop/select-crop.component';
import { LoginComponent } from './pages/login/login.component';
import { GooglePlacesDirective } from './google-places.directive';
import { LocationComponent } from './pages/location/location.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { FarmComponent } from './pages/farm/farm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SelectCropComponent,
    LoginComponent,
    GooglePlacesDirective,
    LocationComponent,
    FarmsComponent,
    FarmComponent
  ],
  imports: [
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

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
      libraries: ['places', 'drawing', 'geometry'],

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
