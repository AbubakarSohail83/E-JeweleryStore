import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login',  pathMatch: 'full'},

  {path:'login',component:LoginComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent },
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
