import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice:3:5}}</h2>
    <h2>{{name | json }}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.25 | percent }}</h2>

    <h2>{{0.25 | currency }}</h2>
    <h2>{{0.25 | currency:'EUR' }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date:'short' }}</h2>
    <h2>{{ date | date:'long' }}</h2>
    <h2>{{ date | date:'shortDate' }}</h2>
    <h2>{{ date | date:'shortTime' }}</h2>
    <h2>{{ date | date:'dd-MM-yy' }}</h2>
    <h2>{{ date | date:'hh:mm:ss' }}</h2>
    
  `,
  styles: []
})
export class PipesComponent implements OnInit {
  public name = "Angular webinar"
  public date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
