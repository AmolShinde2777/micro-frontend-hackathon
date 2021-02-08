// import { Injectable } from '@angular/core';
// import { Employee } from '../app/model/employee';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// //import { NgxSpinnerService } from "ngx-spinner";
 
// const headerOption = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
 
// @Injectable(
//   {
//   providedIn: 'root',
// }
// )
// export class EmployeeService {
//   allEmployee: Employee[];
//   mockUrl: string = 'http://localhost:3000/studentData';
 
//   currentEmployee: Employee = {
//     firstName: '',
//     lastName: '',
//     address: '',    
//     id: null,
//     dob: '',
//     gender:''
//   }
 
//   constructor(
//     private http: HttpClient,
//     //private ngxSpinnerService: NgxSpinnerService
//   ) { }
 
//   // getAllEmployee():Observable<Employee[]>{
//   //   //this.ngxSpinnerService.show();
//   //   return this.http.get<Employee[]>(this.mockUrl, headerOption);
//   // }

//   getAllEmployee() {
//     //this.ngxSpinnerService.show();
//     return this.http.get<Employee[]>(this.mockUrl, headerOption).subscribe(
//       (data: Employee[]) => {
//         this.allEmployee = data;
//         console.table(this.allEmployee);
        
//       });
//   }
 
//   deleteEmployee(id: Number): Observable<Employee> {
//     return this.http.delete<Employee>(this.mockUrl + '/' + id, headerOption);
//   }
 
//   createEmployee(employee: Employee): Observable<Employee> {
//     return this.http.post<Employee>(this.mockUrl, employee, headerOption);
//   }
 
//   updateEmployee(employee: Employee): Observable<Employee> {
//     return this.http.put<Employee>(this.mockUrl + '/' + employee.id, employee, headerOption);
//   }
// }