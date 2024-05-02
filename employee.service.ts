import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';
import { Observable } from 'rxjs';
import { GlobalVariable } from "../data/global";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = GlobalVariable.BASE_API_URL+'employeeList';
 
  private _getURL: string = GlobalVariable.BASE_API_URL+'getEmployee/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateEmployee';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
  getEmployeeById(employeeID: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._getURL + employeeID);
  }
  createEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this._postURL, employee)
  }
}
