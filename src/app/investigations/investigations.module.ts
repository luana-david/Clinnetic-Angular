import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestigationsComponent } from "./investigations.component";
import { InvestigationsListComponent } from './investigations-list/investigations-list.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    component: InvestigationsComponent
  }
]

@NgModule({
  declarations: [InvestigationsComponent, InvestigationsListComponent, CalculatorComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvestigationsModule {}
