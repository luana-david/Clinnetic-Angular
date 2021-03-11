import { Injectable } from "@angular/core";
import { DepartmentModel } from "./department.model";
import { DoctorModel } from "./doctor.model";

@Injectable({providedIn: 'root'})

export class DepartmentsService {

  private _departments: DepartmentModel[] = [
    {
      id: '1',
      name: 'Chardiology',
      doctors: [
        {
          id: '1',
          firstName: 'Laura',
          lastName: 'Stewart',
          departmentId: '1',
          image: '../../assets/images/doctor_f.png'
        },
        {
          id: '2',
          firstName: 'Arthur',
          lastName: 'McKenzy',
          departmentId: '1',
          image: '../../assets/images/doctor_m.png'
        },
        {
          id: '3',
          firstName: 'Deborah',
          lastName: 'Allen',
          departmentId: '1',
          image: '../../assets/images/doctor_f.png'
        }
      ]
    },
    {
      id: '2',
      name: 'Dermathology',
      doctors: [
        {
          id: '4',
          firstName: 'Sarah',
          lastName: 'Lee',
          departmentId: '2',
          image: '../../assets/images/doctor_f.png'
        },
        {
          id: '5',
          firstName: 'Mathew',
          lastName: 'Osborne',
          departmentId: '2',
          image: '../../assets/images/doctor_m.png'
        }
      ]
    },
    {
      id: '3',
      name: 'Gastroentherology',
      doctors: [
        {
          id: '6',
          firstName: 'Kris',
          lastName: 'Wagner',
          departmentId: '3',
          image: '../../assets/images/doctor_m.png'
        },
        {
          id: '7',
          firstName: 'Lucy',
          lastName: 'Stewart',
          departmentId: '3',
          image: '../../assets/images/doctor_f.png'
        }
      ]
    }
  ]

  getDepartments() {
    return this._departments
  }

  getDoctor(doctorId: string) {
    let doctorFound
    this._departments.forEach(department => department.doctors.forEach(doctor => {
      if(doctor.id == doctorId) {
        console.log(doctor);
        doctorFound = doctor
      }
    }))
    return doctorFound
  }

}
