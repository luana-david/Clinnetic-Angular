import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from './departments.component';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {path: '', component: DepartmentsComponent}
]

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    DepartmentsComponent,
    RouterModule
  ]
})

export class DepartmentsModule {}
