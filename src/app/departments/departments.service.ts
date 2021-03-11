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
          image: '../../assets/images/doctor_f.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '1',
              name: 'Echograpdy'
            },
            {
              id: '2',
              name: 'EKG'
            }
          ]
        },
        {
          id: '2',
          firstName: 'Arthur',
          lastName: 'McKenzy',
          departmentId: '1',
          image: '../../assets/images/doctor_m.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '1',
              name: 'Echograpdy'
            },
            {
              id: '2',
              name: 'EKG'
            },
            {
              id: '3',
              name: 'Chirurgy'
            }
          ]
        },
        {
          id: '3',
          firstName: 'Deborah',
          lastName: 'Allen',
          departmentId: '1',
          image: '../../assets/images/doctor_f.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '2',
              name: 'EKG'
            },
            {
              id: '3',
              name: 'Chirurgy'
            }
          ]
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
          image: '../../assets/images/doctor_f.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '4',
              name: 'Excision'
            },
            {
              id: '3',
              name: 'Chirurgy'
            }
          ]
        },
        {
          id: '5',
          firstName: 'Mathew',
          lastName: 'Osborne',
          departmentId: '2',
          image: '../../assets/images/doctor_m.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '4',
              name: 'Excision'
            },
            {
              id: '3',
              name: 'Chirurgy'
            },
            {
              id: '5',
              name: 'Pediatric'
            }
          ]
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
          image: '../../assets/images/doctor_m.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '3',
              name: 'Chirurgy'
            },
            {
              id: '5',
              name: 'Pediatric'
            },
            {
              id: '6',
              name: 'Endoscopy'
            }
          ]
        },
        {
          id: '7',
          firstName: 'Lucy',
          lastName: 'Stewart',
          departmentId: '3',
          image: '../../assets/images/doctor_f.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem commodi eos quo corporis nostrum sint perferendis delectus! Ullam quo dolor, modi consectetur dignissimos deleniti nemo omnis nam eveniet debitis.Quaerat eum qui quod laboriosam ipsum libero explicabo saepe a tenetur sapiente nam neque quae, exercitationem optio eligendi quibusdam. Beatae unde culpa laborum aliquid. Architecto consequuntur voluptatem consectetur aliquid. Debitis! Reiciendis corporis eligendi itaque quia eos optio. Libero est alias eum? Ad explicabo optio inventore harum consequuntur. Et, nemo, dolorum numquam rem eaque, recusandae at blanditiis sapiente ratione adipisci asperiores?',
          services: [
            {
              id: '5',
              name: 'Pediatric'
            },
            {
              id: '6',
              name: 'Endoscopy'
            }
          ]
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
