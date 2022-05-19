import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListsComponent } from './employee-lists/employee-lists.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:"/departments", pathMatch:'full'},
  {path:'departments', component:DepartmentListComponent},
  {path:'departments/:id', component:EmployeeListsComponent},
  {path:'employees', component:EmployeeListsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListsComponent, PageNotFoundComponent,DepartmentListComponent, EmployeeListsComponent]