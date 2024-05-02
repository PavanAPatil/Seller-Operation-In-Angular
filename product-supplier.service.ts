import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IProductwiseSupplier } from '../interfaces/product-supplier-list';

@Injectable({
  providedIn: 'root'
})
export class ProductSupplierService {

  private _getURL: string = GlobalVariable.BASE_API_URL+'getProductSalesPrice/';
  
  constructor(private http: HttpClient) { }

  // returns product List
  getProductWiseSupplierList(productID:number): Observable<IProductwiseSupplier[]> {
    return this.http.get<IProductwiseSupplier[]>(this._getURL+productID);
  }
  
}
