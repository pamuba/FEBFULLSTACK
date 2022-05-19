import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // HttpClient nested inside HttpClientModule
  constructor(public http:HttpClient) { }

  private _url:string = "/assets/data/employees.json"
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
}
