import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorywiseTotalPrice } from '../interfaces/categorywiseTotal';


@Injectable({
  providedIn: 'root'
})
export class CategorywisePricelistService {

 // private _url:string = GlobalVariable.BASE_API_URL;

  // private _getSellerCategorywiseTotal: string = 'http://208.109.11.19:8080/ecommerce/sellerCategorywiseTotal/';
  private _getSupplierCategorywiseTotal: string = '/assets/data/category.json';
  private _getSellerCategorywiseTotal: string = '/assets/data/sellerCategory.json';
  constructor(private http: HttpClient) { }
  getSupplierCategorywiseTotal(): Observable<ICategorywiseTotalPrice>{
    //console.log(this._getSellerCategorywiseTotal);
    
    return this.http.get<ICategorywiseTotalPrice>(this._getSupplierCategorywiseTotal);
  }
  getSellerCategorywiseTotal(): Observable<ICategorywiseTotalPrice>{
    //console.log(this._getSellerCategorywiseTotal);
    
    return this.http.get<ICategorywiseTotalPrice>(this._getSellerCategorywiseTotal);
  }
}
