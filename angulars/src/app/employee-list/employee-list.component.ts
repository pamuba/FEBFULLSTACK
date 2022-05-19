import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
      <h2>Employee List</h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
      </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

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
