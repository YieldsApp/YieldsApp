import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectCropComponent } from './pages/select-crop/select-crop.component';
import { LoginComponent } from './pages/login/login.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { AddFieldComponent } from './pages/add-field/add-field.component';
import { EditFieldComponent } from './pages/edit-field/edit-field.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: LocationComponent, pathMatch: 'full' },
      { path: '', component: FarmsComponent },
      { path: 'crop', component: SelectCropComponent },
      { path: 'login', component: LoginComponent },
      { path: 'farms', component: FarmsComponent },
      { path: 'edit-field/:farmId/:fieldId', component: EditFieldComponent },
      { path: 'add-field/:farmId', component: AddFieldComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
