import { NgModule } from "@angular/core";
import { CardsComponent } from "./cards/cards.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PassesComponent } from "./passes/passes.component";
import { SocialMediaComponent } from "./social-media/social-media.component";

@NgModule({
  declarations: [
    HomePageComponent,
    CardsComponent,
    PassesComponent,
    SocialMediaComponent
  ],
  imports: [],
  exports: [
    HomePageComponent,
    CardsComponent,
    PassesComponent,
    SocialMediaComponent
  ]
})

export class HomeModule {}
