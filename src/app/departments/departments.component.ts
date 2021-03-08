import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from './department.model';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: DepartmentModel[] = []

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.getDepartments()
  }

}
