import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductList } from '../interfaces/productList';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private _getProductListURL: string = GlobalVariable.BASE_API_URL+'productAndCategoryList/';
  private _getProductListByCat: string = GlobalVariable.BASE_API_URL+'getProductListByCategory/';
  
  constructor(private http: HttpClient) { }
  
  // returns product List
  getProductList(): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(this._getProductListURL);
  }
  
  getProductListByCategory(category : string): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(this._getProductListByCat + category);
  }
}
