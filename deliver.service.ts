import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IDeliverRegistration } from '../interfaces/deliver-registration';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {

  
  
  private _listURL: string = GlobalVariable.BASE_API_URL+'deliveryList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getDelivery/';
  private _getListByLocalFranchiseIdURL: string = GlobalVariable.BASE_API_URL+'deliveryListByFranchiseLocal/';
  deliveryListByFranchiseLocal
  private _postURL: string = GlobalVariable.BASE_API_URL+'addOrUpdateDelivery';
 // private _activateURL: string = GlobalVariable.BASE_API_URL+'activateOrDeactivateFranchiseLocal';

  constructor(private http: HttpClient) { }

  getDeliveryList(): Observable<IDeliverRegistration[]> {
    return this.http.get<IDeliverRegistration[]>(this._listURL);
  }
  getDeliveryById(franchiseId: number): Observable<IDeliverRegistration> {
    return this.http.get<IDeliverRegistration>(this._getURL + franchiseId);
  }
  getDeliveryListByLocalFranchiseId(franchiseId: number): Observable<IDeliverRegistration> {
    return this.http.get<IDeliverRegistration>(this._getListByLocalFranchiseIdURL + franchiseId);
  }
  createDelivery(franchise: IDeliverRegistration): Observable<IDeliverRegistration> {
    return this.http.post<IDeliverRegistration>(this._postURL, franchise)
  }
  // activateOrDeactivate(franchise: IActivateDeactivateLocalFranchise){
  //   return this.http.post<IActivateDeactivateLocalFranchise>(this._activateURL, franchise)

  // }
}
