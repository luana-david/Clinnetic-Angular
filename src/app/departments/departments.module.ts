import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from './departments.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DoctorsComponent } from './doctors/doctors.component'
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: DepartmentsComponent, children: [
    {
      path: 'doctor/:id', component: DoctorsComponent
    }
  ]}
]

@NgModule({
  declarations: [
    DepartmentsComponent,
    DoctorsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [
    DepartmentsComponent,
    RouterModule
  ]
})

export class DepartmentsModule {}
