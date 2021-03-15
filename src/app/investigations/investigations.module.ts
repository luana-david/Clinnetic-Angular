import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestigationsComponent } from "./investigations.component";

const routes: Routes = [
  {
    path: '',
    component: InvestigationsComponent
  }
]

@NgModule({
  declarations: [InvestigationsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvestigationsModule {}
