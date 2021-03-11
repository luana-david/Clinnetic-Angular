import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './common/shared.module';
import { HomeModule } from './home/home.module';
import { DepartmentsModule } from './departments/departments.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    DepartmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
