import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
<<<<<<< HEAD
import { AuthDashboardComponent } from './authentication/auth-dashboard/auth-dashboard.component';
import { SignupComponent } from './src/app/authentication/signup/signup.component';
=======
>>>>>>> parent of 32d6477 (Added Lazy Loading feature in authentication)


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
<<<<<<< HEAD
    SignupComponent,
   ],
=======
    ForgetPasswordComponent],
>>>>>>> parent of 32d6477 (Added Lazy Loading feature in authentication)
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
