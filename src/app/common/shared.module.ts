import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DepartmentsModule } from "../departments/departments.module";
import { HomeModule } from "../home/home.module";
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
    RouterModule,
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    FooterComponent,
    CarouselDirective,
  ]
})

export class SharedModule {

}
