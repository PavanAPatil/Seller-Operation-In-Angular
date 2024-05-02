import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISellerRegistration } from '../interfaces/sellerRegistration';
import { GlobalVariable } from '../data/global';
@Injectable({
  providedIn: 'root'
})
export class SellerRegistrationService {
  private _url: string = GlobalVariable.BASE_API_URL+'sellerList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getSeller/';
  private _getSellerByFranchiseIdURL: string = GlobalVariable.BASE_API_URL+'sellerListByFranchiseLocal/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'addOrUpdateSeller';

  constructor(private http: HttpClient) { }

  getSeller(): Observable<ISellerRegistration[]> {
    return this.http.get<ISellerRegistration[]>(this._url);
  }
  getSellerById(sellerId: number): Observable<ISellerRegistration> {
    return this.http.get<ISellerRegistration>(this._getURL + sellerId);
  }
  getSellerByFranchiseId(franchiseId: number): Observable<ISellerRegistration> {
    return this.http.get<ISellerRegistration>(this._getSellerByFranchiseIdURL + franchiseId);
  }
  createSeller(seller: ISellerRegistration): Observable<ISellerRegistration> {
    return this.http.post<ISellerRegistration>(this._postURL, seller)
  }
}
