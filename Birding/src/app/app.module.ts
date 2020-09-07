import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputModule } from '../input/input.module';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { BirdListComponent } from './home/bird-list/bird-list.component';
import { AddAreaComponent } from './home/add-area/add-area.component';
import { AddBirdComponent } from './home/add-bird/add-bird.component';
import { AddSpotComponent } from './home/add-spot/add-spot.component';
import { SpotListComponent } from './home/spot-list/spot-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    BirdListComponent,
    AddAreaComponent,
    AddBirdComponent,
    AddSpotComponent,
    SpotListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
