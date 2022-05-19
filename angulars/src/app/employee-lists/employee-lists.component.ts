import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-lists',
  template: `
      <h2>Deparment List</h2>
      <h3>You selected department with id = {{departmentId}}</h3>
      <a (click)="goPrevious()">Previous</a>
      <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class EmployeeListsComponent implements OnInit {

  public departmentId!:number
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id')
    // this.departmentId = Number(id)
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id')
      this.departmentId = Number(id)
    })
  }
  goPrevious(){
    let previousId = this.departmentId - 1
    this.router.navigate(['/departments', previousId])
  }
  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/departments', nextId])
  }

}
