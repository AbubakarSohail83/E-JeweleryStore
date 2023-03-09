import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home',  pathMatch: 'full'},

  {path:'' ,
  children: [
    {
      path: 'auth',
      loadChildren: () => import('./authentication/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
       path: 'forgetPassword', component: ForgetPasswordComponent 
    }
  ]},
  {path:'home',component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
