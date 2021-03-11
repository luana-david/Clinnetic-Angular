export interface DoctorModel {
  id: string;
  firstName: string;
  lastName: string;
  departmentId: string;
  image: string;
  description: string;
  services: Services[];
}

export interface Services {
  id: string;
  name: string;
}
