import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home',  pathMatch: 'full'},

  {path:'' ,
  children: [
    {
      path: 'auth',
      loadChildren: () => import('./authentication/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
      path: 'pm1',
      loadChildren: () => import('./practice-module1/practice-module1.module').then(m => m.PracticeModule1Module),
    }
  ]},
  {path:'home',component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   //intializing the routers and starts it, listening to browser location changes, also making the router module be available for routing module
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
