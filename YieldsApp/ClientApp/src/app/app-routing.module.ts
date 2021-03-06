import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectCropComponent } from './pages/select-crop/select-crop.component';
import { LoginComponent } from './pages/login/login.component';
import { LocationComponent } from './pages/location/location.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: LocationComponent, pathMatch: 'full' },
      { path: '', component: SelectCropComponent },
      { path: 'location', component: LocationComponent },
      { path: 'crop', component: SelectCropComponent },
      { path: 'login', component: LoginComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
