import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[]; //This is the variable array through which it will iterate.! mark is given for null handling. Employee class has the properties.
  constructor(
    private employeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeService.getEmployeeList().subscribe(
      //The subscribe method needs to be called to use the observable module.
      (data) => {
        this.employees = data;
      }
    );
  }
  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number) {
    this.employeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }
}
