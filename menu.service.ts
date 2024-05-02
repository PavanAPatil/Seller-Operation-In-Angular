
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductSeller } from '../interfaces/productSeller';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IMobileStatus } from '../interfaces/mobile-status';
import { IActivateDeactivateProductSeller } from '../interfaces/activate-deactivate-product-seller';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _saveOrUpdateProductSeller: string = GlobalVariable.BASE_API_URL+'saveOrUpdateProductSeller/';
  private _getProductSellerById: string = GlobalVariable.BASE_API_URL+'getProductSellerById/';
  private _getProductSellerListBySellerId: string = GlobalVariable.BASE_API_URL+'getProductSellerListBySellerId/';
  private _checkURL : string = GlobalVariable.BASE_API_URL+'isSellerProductExists/';  
  private _activateURL: string = GlobalVariable.BASE_API_URL+'activateOrDeactivateProductSeller';

  private _getProductSellerListDeactiveBySellerId: string = GlobalVariable.BASE_API_URL+'getProductSellerListByDeactiveSellerId/';


  constructor(private http: HttpClient) { }
  
  checksellerProductExist(sellerId : number,productId:number) : Observable<IMobileStatus> {
    return this.http.get<IMobileStatus>(this._checkURL + sellerId+'/'+productId );
  }
  
  saveOrUpdateProductSeller(productSeller: IProductSeller): Observable<IProductSeller> {
    console.log('call in CreateSupplier Servie');
    return this.http.post<IProductSeller>(this._saveOrUpdateProductSeller, productSeller)
  }
  
  getProductSellerById(productSellerId : number): Observable<IProductSeller> {
    return this.http.get<IProductSeller>(this._getProductSellerById + productSellerId);
  }

  getProductSellerListBySellerId(SellerId : number): Observable<IProductSeller> {
    return this.http.get<IProductSeller>(this._getProductSellerListBySellerId + SellerId);
  }
  
  getProductSellerListDeactiveBySellerId(SellerId : number): Observable<IProductSeller> {
    return this.http.get<IProductSeller>(this._getProductSellerListDeactiveBySellerId + SellerId);
  }

  activateOrDeactivate(productSeller: IActivateDeactivateProductSeller){
    return this.http.post<IActivateDeactivateProductSeller>(this._activateURL, productSeller)

  }
}
