import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupplierOrder } from '../interfaces/supplierOrder';
import { ISupplierOrderItemData } from '../interfaces/supplierOrderItemData';
import { ISupplierOrderStaus } from '../interfaces/supplierOrderStatus';
import { ISupplierAllStatusOrder } from '../interfaces/supplier-all-status-order';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService {

  private _getTodaysSupplierOrderListURL: string = GlobalVariable.BASE_API_URL+'getTodaysSupplierOrderList';
  private _saveSupplierOrderURL: string = GlobalVariable.BASE_API_URL+'createSupplierOrder';
  private _getSupplierOrderById: string = GlobalVariable.BASE_API_URL+'getSupplierOrderById/';
  private _removeSupplierOrderItem: string = GlobalVariable.BASE_API_URL+'removeProductFromSupplierOrder/';
  private _updateSupplierOrderStatusURL: string = GlobalVariable.BASE_API_URL+'changeSupplierOrderStatus/';

  private _getShipeddOrderStatus = GlobalVariable.BASE_API_URL+'getShippedSupplierOrderList/';
  private _getDeliveredOrderStatus = GlobalVariable.BASE_API_URL+'getDeliveredSupplierOrderList/';
  private _getCancelOrderStatus = GlobalVariable.BASE_API_URL+'getCanceledSupplierOrderList/';

  private _getListByLocalFranchiseId: string = GlobalVariable.BASE_API_URL+'getSupplierOrderByFranchiseLocal/';


  constructor( private http: HttpClient ) { }

// returns productPurchase List 
getTodaysSupplierOrderList(): Observable<ISupplierOrder[]> {
  return this.http.get<ISupplierOrder[]>(this._getTodaysSupplierOrderListURL);
}

// Return the supplier order by Local Franchise ID
getSupplierOrderByFranchiseId(franchiseId: number): Observable<ISupplierOrder[]> {
  console.log("Supplier Order Link ="+ this._getListByLocalFranchiseId + franchiseId);
  return this.http.get<ISupplierOrder[]>(this._getListByLocalFranchiseId + franchiseId);
}

 // Save productPurchase Method  

 saveSupplierOrder(supplierOrder: ISupplierOrder[]):Observable<ISupplierOrder>{
  return this.http.post<ISupplierOrder>(this._saveSupplierOrderURL,supplierOrder);
}
 
getSupplierOrderById(orderId: number): Observable<ISupplierOrderItemData[]> {
  return this.http.get<ISupplierOrderItemData[]>(this._getSupplierOrderById + orderId);
}


// remove single order item from supplier Order List
removeSupplierOrderItem(supplierOrderDetailsId: number): Observable<ISupplierOrderItemData>{
  return this.http.get<ISupplierOrderItemData>(this._removeSupplierOrderItem+ supplierOrderDetailsId);
  }

  // Update Order Status Method

updateSupplierOrderStatus(orderStatus: ISupplierOrderStaus):Observable<ISupplierOrderStaus>{
  return this.http.post<ISupplierOrderStaus>(this._updateSupplierOrderStatusURL,orderStatus);
}


// return  supplier Shipped Status order


getSupplierOrderByShippedStatus(fromdate: string,todate: string,): Observable<ISupplierAllStatusOrder[]> {
  return this.http.get<ISupplierAllStatusOrder[]>(this._getShipeddOrderStatus+fromdate+"/"+todate );
}

// return  supplier Delivered Status order


getSupplierOrderByDeliveredStatus(fromdate: string,todate: string,): Observable<ISupplierAllStatusOrder[]> {
  return this.http.get<ISupplierAllStatusOrder[]>(this._getDeliveredOrderStatus+fromdate+"/"+todate );
}

// return  supplier Cancel Status order


getSupplierOrderByCancelStatus(fromdate: string,todate: string,): Observable<ISupplierAllStatusOrder[]> {
  return this.http.get<ISupplierAllStatusOrder[]>(this._getCancelOrderStatus+fromdate+"/"+todate );
}



}
