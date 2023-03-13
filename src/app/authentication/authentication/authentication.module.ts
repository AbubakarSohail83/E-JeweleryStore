import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthDashboardComponent } from '../auth-dashboard/auth-dashboard.component';


@NgModule({
  declarations: [AuthDashboardComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    
  ]
})
export class AuthenticationModule { 
  constructor(){
    console.log("authentication module loaded");
  }
}
