import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectCropComponent } from './pages/select-crop/select-crop.component';
import { LoginComponent } from './pages/login/login.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { FarmComponent } from './pages/farm/farm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: LocationComponent, pathMatch: 'full' },
      { path: '', component: SelectCropComponent },
      { path: 'crop', component: SelectCropComponent },
      { path: 'login', component: LoginComponent },
      { path: 'farms', component: FarmsComponent },
      { path: 'farm/:id', component: FarmComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
