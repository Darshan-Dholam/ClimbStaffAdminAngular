import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  getEmployees( compid: number) {
    return this.http.get(`${environment.apiUrl}/dashboard/employee/list/` + compid + `/`);
  }

  getSearchedEmployees( compid: number, empname: string) {
    return this.http.get(`${environment.apiUrl}/dashboard/employee/list/` + compid + `/` + empname);
  }

  getEmployeeDetail( empid: number) {
    return this.http.get(`${environment.apiUrl}/dashboard/employee/` + empid);
  }

  getAddress( geohash: string) {
    return this.http.get(`${environment.apiUrl}/globe/address/` + geohash);
  }

}
