import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { AddFieldComponent } from './pages/add-field/add-field.component';
import { EditFieldComponent } from './pages/edit-field/edit-field.component';
import { CropComponent } from './pages/system-table/crop/crop.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: LocationComponent, pathMatch: 'full' },
      { path: '', component: FarmsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'farms', component: FarmsComponent },
      { path: 'edit-field/:farmId/:fieldId', component: EditFieldComponent },
      { path: 'add-field/:farmId', component: AddFieldComponent },
      {
        path: 'system-table', children: [
          { path: 'crops', component: CropComponent }
       ]
      }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
