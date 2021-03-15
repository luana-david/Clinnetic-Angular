import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { DepartmentsModule } from './departments/departments.module';
import { InvestigationsComponent } from './investigations/investigations.component';
import { InvestigationsModule } from './investigations/investigations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    DepartmentsModule,
    InvestigationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
