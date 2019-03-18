import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {FlashMessagesModule} from 'angular2-flash-messages';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    RouterModule.forRoot([
      
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'register',
        component:RegisterComponent
      },
      {
        path: 'profile',
        component:ProfileComponent
      },
      {
        path: 'signup',
        component:SignupComponent
      },
      {
        path: '',
        component:HomeComponent
      }
    ]

    )
  ],
  providers: [ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
