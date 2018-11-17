import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './map/filter/filter.component';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { RegisterModule } from './register/register.module';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    OwnerRegistrationComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    RegisterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
