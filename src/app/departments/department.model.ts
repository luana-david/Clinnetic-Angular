import { DoctorModel } from "./doctor.model";

export interface DepartmentModel {
  id: string;
  name: string;
  doctors: DoctorModel[];
}
