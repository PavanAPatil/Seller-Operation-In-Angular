import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../interfaces/customer';
import { Observable } from 'rxjs';
import { GlobalVariable } from "../data/global";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private _url:string = '/assets/data/customer.json'; 

  private _url: string = GlobalVariable.BASE_API_URL+'customerList';
 
  private _getURL: string = GlobalVariable.BASE_API_URL+'getCustomer/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateCustomer';

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this._url);
  }
  getCustomerById(customerID: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this._getURL + customerID);
  }
  createCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this._postURL, customer)
  }
}
