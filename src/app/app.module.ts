import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavUserComponent } from './components/template/nav-user/nav-user.component';
import { MainNavComponent } from './components/template/main-nav/main-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from './components/views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { UsersReadComponent } from './components/views/users-read/users-read.component';
import { MatListModule } from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    NavUserComponent,
    HomeComponent,
    UsersReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
