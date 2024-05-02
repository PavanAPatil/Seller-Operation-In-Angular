import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISellerProductList } from '../interfaces/sellerProductList';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class SellerProductListService {

  private _getSellerProductListURL : string = GlobalVariable.BASE_API_URL+'sellerProductList';

  constructor(private http: HttpClient) { }

  // return seller product list along with the product price
  getSellerProductList():Observable<ISellerProductList[]>{
    return this.http.get<ISellerProductList[]>(this._getSellerProductListURL);
  }
}
