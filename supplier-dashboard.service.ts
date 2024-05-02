import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupplierTotalOrder } from '../interfaces/supplierDbTotal';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class SupplierDashboardService {
  private _getSupplierOrderTotalURL: string = GlobalVariable.BASE_API_URL+'getSupplierDashboardTotal/';
  private _getSupplierOrderProductWiseURL:string = GlobalVariable.BASE_API_URL+'getSupplierDashboardTotalProductwise/'
  constructor(private http: HttpClient) { }

  getSupplierOrderTotalURL(today:string):Observable<ISupplierTotalOrder[]>{
    return this.http.get<ISupplierTotalOrder[]>(this._getSupplierOrderTotalURL+today);
  }
  getSupplierOrderProductWiseURL(today:string,productId:number):Observable<ISupplierTotalOrder[]>{
    return this.http.get<ISupplierTotalOrder[]>(this._getSupplierOrderProductWiseURL+today+"/"+productId);
  }
}
