import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




 const routes: Routes = [
      {
        path:'register',
       
        component:RegisterComponent
      },
      {
        path:"login",component:LoginComponent
      }

  
 ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
