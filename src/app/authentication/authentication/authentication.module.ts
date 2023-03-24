import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthDashboardComponent } from '../auth-dashboard/auth-dashboard.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';


@NgModule({
  declarations: [AuthDashboardComponent,
  LoginComponent,
SignupComponent,
ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { 
  constructor(){
    console.log("authentication module loaded");
  }
}
