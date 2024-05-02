import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISellerTotalOrder } from '../interfaces/sellerDbTotal';
import { ISellerProductWiseOrder } from '../interfaces/sellerDbProduct';
import { ICategorywiseTotalPrice } from '../interfaces/categorywiseTotal';
import { GlobalVariable } from '../data/global';


@Injectable({
  providedIn: 'root'
})
export class SellerDashboardService {
  
  
  private _getSellerOrderTotalURL: string = GlobalVariable.BASE_API_URL+'getSellerDashboardTotal/';
  private _getSellerOrderProductWiseURL:string = GlobalVariable.BASE_API_URL+'getSellerDashboardTotalProductwise/'
  constructor(private http: HttpClient) { }

  getSellerOrderTotalURL(today:string):Observable<ISellerTotalOrder[]>{
    return this.http.get<ISellerTotalOrder[]>(this._getSellerOrderTotalURL+today);
  }
  getSellerOrderProductWiseURL(today:string,productId:number):Observable<ISellerProductWiseOrder[]>{
    return this.http.get<ISellerProductWiseOrder[]>(this._getSellerOrderProductWiseURL+today+"/"+productId);
  }

  
}
