import { NgModule } from "@angular/core";
import { CarouselDirective } from "./carousel.directive";
import { FooterComponent } from "./footer/footer.component";
import { ToggleMenuDirective } from "./menu-toggle.directive";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CarouselDirective,
    ToggleMenuDirective
  ],
  imports: [],
  exports: [
    NavComponent,
    FooterComponent,
    FooterComponent,
    CarouselDirective,
  ]
})

export class SharedModule {

}
