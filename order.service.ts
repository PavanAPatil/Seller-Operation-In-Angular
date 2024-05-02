import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/order';
import { Observable } from 'rxjs';
import { IOrderStaus } from '../interfaces/orderStatus';
import { GlobalVariable } from "../data/global";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private getOrderList: string =  GlobalVariable.BASE_API_URL+'getOrderList/';
  private _getTodaysOrderURL: string =  GlobalVariable.BASE_API_URL+'getTodaysOrderList/';
  private _getOrderByIdURL: string = GlobalVariable.BASE_API_URL+'getOrderForDeliveryByOrderId/';
  private _updateOrderStatusURL: string = GlobalVariable.BASE_API_URL+'changeOrderDetailsStatus';

//https://gembomart.com/virtual-ecommerce/changeOrderDetailsStatus
  
  constructor(private http: HttpClient) { }  
  // getTodaysOrder List
  getTodaysOrderList(sellerId:number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this._getTodaysOrderURL+sellerId);
  }

  getAllOrderList(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.getOrderList);
  }



  getOrderById(orderID: number): Observable<IOrder> {
    return this.http.get<IOrder>(this._getOrderByIdURL + orderID);
  }

  // Update Order Status Method

  updateOrderStatus(orderStatus: IOrderStaus):Observable<IOrderStaus>{
    return this.http.post<IOrderStaus>(this._updateOrderStatusURL,orderStatus);
  }


  
}
