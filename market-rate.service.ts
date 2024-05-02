import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarketRate } from '../interfaces/marketRate';
import { GlobalVariable } from '../data/global';


@Injectable({
  providedIn: 'root'
})
export class MarketRateService {

  private _getMarketRateActiveListURL: string = GlobalVariable.BASE_API_URL+'productPriceActiveList';
  private _saveMarketRateURL: string = GlobalVariable.BASE_API_URL+'addOrUpdateProductPrice';
  private _getMarketRateByProductPriceId: string = GlobalVariable.BASE_API_URL+'getProductPrice/';


  constructor( private http: HttpClient ) { }

// returns productPurchase List
getMarketRateActiveList(): Observable<IMarketRate[]> {
  return this.http.get<IMarketRate[]>(this._getMarketRateActiveListURL);
}
 // Save productPurchase Method  

 saveMarketRate(marketRate: IMarketRate):Observable<IMarketRate>{
  return this.http.post<IMarketRate>(this._saveMarketRateURL,marketRate);
}

// return Market Rate BY ProductPriceId

getMarketRateByProductPriceId(productPriceId: number): Observable<IMarketRate> {
  return this.http.get<IMarketRate>(this._getMarketRateByProductPriceId + productPriceId);
}

}
