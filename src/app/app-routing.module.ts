import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MapComponent } from './map/map.component';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { RegisterComponent } from './register/register.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'map', 
    component: MapComponent
  },
  {
    path: 'owner/registration',
    component: RegComponent
  },
  {
    path: 'user/registration',
    component: RegisterComponent
  },
  {
    path: 'owner/add',
    component: OwnerRegistrationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: []
})
export class AppRoutingModule { }
