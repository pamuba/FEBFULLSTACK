import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
      <h2>Employee List</h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
      </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  // Single Resp Principal
  // DRY

  // Service
  // 1. Share the Data
  // 2. Implement application logic
  // 3. DI ed inside the components 

  // Observables - RxJS
  // Observables needs subscribers
  // Observables with HTTP Calls returns all the data at once
  // HTTP, Service, Obsrvables

  public employees:any = []
  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
                    .subscribe(data => this.employees = data)
  }

}
