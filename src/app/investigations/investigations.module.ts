import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestigationsComponent } from "./investigations.component";
import { InvestigationsListComponent } from './investigations-list/investigations-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: InvestigationsComponent
  }
]

@NgModule({
  declarations: [InvestigationsComponent, InvestigationsListComponent, CalculatorComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})

export class InvestigationsModule {}
