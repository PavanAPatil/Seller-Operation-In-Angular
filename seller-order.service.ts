import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISellerOrder } from '../interfaces/sellerOrder';
import { ISellerOrderInfo } from '../interfaces/sellerOrderInfo';
import { ISellerOrderItemData } from '../interfaces/sellerOrderItemData';
import { ISellerOrderStaus } from '../interfaces/sellerOrderStatus';
import { ISellerAllStatusOrder } from '../interfaces/seller-all-status-order';
import { GlobalVariable } from '../data/global';
@Injectable({
  providedIn: 'root'
})
export class SellerOrderService {

  
  private _getTodaysSellerOrderListURL: string = GlobalVariable.BASE_API_URL+'getTodaysSellerOrderList';
  private _saveSellerOrderURL: string = GlobalVariable.BASE_API_URL+'createSellerOrder';
  private _getSellerOrderByMobileNoURL: string = GlobalVariable.BASE_API_URL+'getTodaysSellerOrderByMobileNo/';
  private _removeSellerOrderItem: string = GlobalVariable.BASE_API_URL+'removeProductFromOrder/';
  private _updateSellerOrderStatusURL: string = GlobalVariable.BASE_API_URL+'changeSellerOrderStatus';

  private _getShipeddOrderStatus = GlobalVariable.BASE_API_URL+'getShippedSellerOrderList/';
  private _getDeliveredOrderStatus = GlobalVariable.BASE_API_URL+'getDeliveredSellerOrderList/';
  private _getCancelOrderStatus = GlobalVariable.BASE_API_URL+'getCanceledSellerOrderList/';

  private _getSellerOrderByLocalFranchiseId: string = GlobalVariable.BASE_API_URL+'getSellerOrderByFranchiseLocal/';

  constructor( private http: HttpClient ) { }

// returns Seller Order Info List

getTodaysSellerOrderList(): Observable<ISellerOrderInfo[]> {
  return this.http.get<ISellerOrderInfo[]>(this._getTodaysSellerOrderListURL);
}
 // Save Seller Order Method  

 saveSellerOrder(sellerOrder: ISellerOrder[]):Observable<ISellerOrder>{
  return this.http.post<ISellerOrder>(this._saveSellerOrderURL,sellerOrder);
}

// return seller Order by Mobile No

getSellerOrderByMobileNo(sellerMobileNo: number): Observable<ISellerOrderItemData[]> {
  return this.http.get<ISellerOrderItemData[]>(this._getSellerOrderByMobileNoURL + sellerMobileNo);
}

// return seller Order by Local Franchise Id

getSellerOrderByFranchiseId(franchiseId: number): Observable<ISellerOrderInfo[]> {
  return this.http.get<ISellerOrderInfo[]>(this._getSellerOrderByLocalFranchiseId+franchiseId);
}

// remove single order item from seller Order List
removeSellerOrderItem(sellerOrderDetailsId: number): Observable<ISellerOrderItemData>{
return this.http.get<ISellerOrderItemData>(this._removeSellerOrderItem+ sellerOrderDetailsId);
}

// Update Order Status Method

updateSellerOrderStatus(orderStatus: ISellerOrderStaus):Observable<ISellerOrderStaus>{
  return this.http.post<ISellerOrderStaus>(this._updateSellerOrderStatusURL,orderStatus);
}

// return  Seller Shipped Status order


getSellerOrderByShippedStatus(fromdate: string,todate: string,): Observable<ISellerAllStatusOrder[]> {
  return this.http.get<ISellerAllStatusOrder[]>(this._getShipeddOrderStatus+fromdate+"/"+todate );
}

// return  Seller Delivered Status order


getSellerOrderByDeliveredStatus(fromdate: string,todate: string,): Observable<ISellerAllStatusOrder[]> {
  return this.http.get<ISellerAllStatusOrder[]>(this._getDeliveredOrderStatus+fromdate+"/"+todate );
}

// return  Seller Cancel Status order


getSellerOrderByCancelStatus(fromdate: string,todate: string,): Observable<ISellerAllStatusOrder[]> {
  return this.http.get<ISellerAllStatusOrder[]>(this._getCancelOrderStatus+fromdate+"/"+todate );
}


}
