import { Injectable } from "@angular/core";
import { DepartmentModel } from "./department.model";

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
          departmentId: '1'
        }
      ]
    },
    {
      id: '1',
      name: 'Chardiology',
      doctors: [
        {
          id: '2',
          firstName: 'Arthur',
          lastName: 'McKenzy',
          departmentId: '1'
        }
      ]
    },
    {
      id: '1',
      name: 'Chardiology',
      doctors: [
        {
          id: '3',
          firstName: 'Deborah',
          lastName: 'Allen',
          departmentId: '1'
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
          departmentId: '2'
        }
      ]
    },
    {
      id: '2',
      name: 'Dermathology',
      doctors: [
        {
          id: '5',
          firstName: 'Mathew',
          lastName: 'Osborne',
          departmentId: '2'
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
          departmentId: '3'
        }
      ]
    },
    {
      id: '3',
      name: 'Gastroentherology',
      doctors: [
        {
          id: '7',
          firstName: 'Lucy',
          lastName: 'Stewart',
          departmentId: '3'
        }
      ]
    }
  ]

  getDepartments() {
    return this._departments
  }

}
