import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupplierProductList } from '../interfaces/supplierProductList';
import { ISupplierProduct } from '../interfaces/supplier-product';
import { GlobalVariable } from '../data/global';




@Injectable({
  providedIn: 'root'
})
export class SupplierProductListService {

  private _getSupplierProductListURL: string = GlobalVariable.BASE_API_URL+"supplierProductList/1";
  private _addOrUpdateProductDetails: string = GlobalVariable.BASE_API_URL+"addOrUpdateProductDetails";
  
  constructor(private http: HttpClient) { }
  
  // this retuen the supplier product list along with the product price
  getSupplierProductList():Observable<ISupplierProductList[]>{

    return this.http.get<ISupplierProductList[]>(this._getSupplierProductListURL);

  }

  createSupplierProduct(product: ISupplierProduct): Observable<ISupplierProduct> {
    console.log('call in CreateSupplierProduct Service');
    return this.http.post<ISupplierProduct>(this._addOrUpdateProductDetails, product);
    
  }
  

}
