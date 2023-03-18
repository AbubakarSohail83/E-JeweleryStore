import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { AuthDashboardComponent } from './authentication/auth-dashboard/auth-dashboard.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddItemAndCategoriesModule } from './add-item-and-categories/add-item-and-categories.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
