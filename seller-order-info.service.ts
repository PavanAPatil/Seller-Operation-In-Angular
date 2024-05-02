import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISellerOrderInfo } from '../interfaces/seller-order-info';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class SellerOrderInfoService {

  private _getTodaysSellerOrderListURL:string = '/assets/data/seller.json';
  private _getSellerOrderInfoByMobileURL: string = GlobalVariable.BASE_API_URL+'getSellerOrderList/';
  constructor(private http: HttpClient) { }
  // returns productPurchase List
getSellerOrderInfoListByMobileNo(mobileNo:number,currentDate:string): Observable<any> {
  return this.http.get<any>(this._getSellerOrderInfoByMobileURL+mobileNo+"/"+currentDate);
}

getTodaysSellerOrderList():Observable<ISellerOrderInfo[]>{
  return this.http.get<ISellerOrderInfo[]>(this._getTodaysSellerOrderListURL);
}

}
