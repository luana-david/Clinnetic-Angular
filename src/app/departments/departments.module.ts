import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from './departments.component';
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
    SharedModule
  ],
  exports: [
    DepartmentsComponent,
    RouterModule
  ]
})

export class DepartmentsModule {}
