import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
        <h3>Department List</h3>
        <ul class="items">
          <li (click) = "onSelect(dept)" *ngFor="let dept of departments">
              <span class="badge">{{dept.id}}</span>{{dept.name}}
          </li>
        </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"ReactJS"},
    {"id":3, "name":"NextJS"},
    {"id":4, "name":"Sevelt"},
    {"id":5, "name":"VueJS"},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(dept:any){
    this.router.navigate(['/departments', dept.id])
  }

}
