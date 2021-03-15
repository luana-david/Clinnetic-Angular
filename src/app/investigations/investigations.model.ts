import { DepartmentModel } from "../departments/department.model";

export interface InvestigationsModel {
  id: string;
  type: string;
  investigations: {
    name: string;
    price: number;
  }[]
}
