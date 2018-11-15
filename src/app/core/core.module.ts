import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent, 
    HomeComponent, 
    LoginComponent, PaymentComponent
  ]
})
export class CoreModule { }
