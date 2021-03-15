import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
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
  imports: [
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    FooterComponent,
    CarouselDirective,
    MatExpansionModule,
    MatIconModule,
    CommonModule
  ]
})

export class SharedModule {

}
