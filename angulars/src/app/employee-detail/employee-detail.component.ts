import { Component, OnInit } from '@angular/core';

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
  // HTTP, Obsrvables

  public employees = [
    {"id":1,"name":"Josh", "age":"22"},
    {"id":2,"name":"John", "age":"32"},
    {"id":3,"name":"Jimmy", "age":"20"},
    {"id":4,"name":"Jill", "age":"19"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
