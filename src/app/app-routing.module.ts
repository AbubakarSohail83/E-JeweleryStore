import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';

const routes: Routes = [
<<<<<<< HEAD
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
=======
  {path:'login',component:LoginComponent},
>>>>>>> parent of 32d6477 (Added Lazy Loading feature in authentication)
  {path:'home',component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
