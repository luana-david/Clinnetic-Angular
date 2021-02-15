import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CardsComponent } from './home/cards/cards.component';
import { PassesComponent } from './home/passes/passes.component';
import { CarouselDirective } from './common/carousel.directive';
import { ToggleMenuDirective } from './common/menu-toggle.directive';
import { SocialMediaComponent } from './home/social-media/social-media.component';
import { SharedModule } from './common/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
