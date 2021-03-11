import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentsService } from '../departments.service';
import { DoctorModel } from '../doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctor: DoctorModel
  showMode: boolean = true

  constructor(private departmentsService: DepartmentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.doctor = this.departmentsService.getDoctor(param['id'])
      console.log(this.doctor);
    })
    this.departmentsService.getModalMode().subscribe(mode => this.showMode = mode)
  }
}
