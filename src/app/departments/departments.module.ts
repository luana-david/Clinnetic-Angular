import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from './departments.component'

const routes: Routes = [
  {path: '', component: DepartmentsComponent}
]

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    DepartmentsComponent,
    RouterModule
  ]
})

export class DepartmentsModule {}
