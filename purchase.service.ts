import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductPurchase } from '../interfaces/purchase';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private _getproductPurchaseListURL: string = GlobalVariable.BASE_API_URL+'productPurchaseList';
  
  private _saveProductPurchaseURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateProductPurchase';

  constructor(private http: HttpClient) { }

   // returns productPurchase List
   getProductPurchaseList(): Observable<IProductPurchase[]> {
    return this.http.get<IProductPurchase[]>(this._getproductPurchaseListURL);
  }
   // Add productPurchase Method  

   saveProductPurchase(productPurchase: IProductPurchase):Observable<IProductPurchase>{
    return this.http.post<IProductPurchase>(this._saveProductPurchaseURL,productPurchase);
  }




}
