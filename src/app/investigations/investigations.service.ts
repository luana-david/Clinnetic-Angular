import { Injectable } from "@angular/core";
import { DepartmentsService } from "../departments/departments.service";
import { InvestigationsModel } from "./investigations.model";

@Injectable({providedIn: 'root'})

export class InvestigationsService {

  constructor(private departmentsService: DepartmentsService) {}

  private _investigations: InvestigationsModel[] = [
    {
      id: "1",
      type: "Blood Test",
      investigations: [
        {
          name: "Triglycerides",
          price: 20
        },
        {
          name: "Blood glucose ",
          price: 15
        },
        {
          name: "Coagulation tests",
          price: 17
        },
        {
          name: "TSH",
          price: 25
        }
      ]
    },
    {
      id: "5",
      type: "Diagnostic Imaging",
      investigations: [
        {
          name: "Echocardiography",
          price: 20
        },
        {
          name: "Brain scanning",
          price: 20
        },
        {
          name: "Mammography",
          price: 20
        },
        {
          name: "Tomography",
          price: 20
        }

      ]
    }
  ]

  getInvestigations() {
    return this._investigations
  }
}
