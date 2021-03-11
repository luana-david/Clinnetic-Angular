import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'departments',
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
