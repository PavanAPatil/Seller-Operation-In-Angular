import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IActivateDeactivateDistrictFranchise } from '../interfaces/activate-deactivate-district-franchise';
import { IFranchiseDistrictRegistration } from '../interfaces/franchise-district-reg';

@Injectable({
  providedIn: 'root'
})
export class FranchiseDistrictService {

  private _listURL: string = GlobalVariable.BASE_API_URL+'franchiseDistrictList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getDistrictFranchise/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateFranchiseDistrict';
  private _activateURL: string = GlobalVariable.BASE_API_URL+'activateOrDeactivateFranchiseDistrict';

  constructor(private http: HttpClient) { }

  getDistrictFranchise(): Observable<IFranchiseDistrictRegistration[]> {
    return this.http.get<IFranchiseDistrictRegistration[]>(this._listURL);
  }
  getDistrictFranchiseById(franchiseId: number): Observable<IFranchiseDistrictRegistration> {
    return this.http.get<IFranchiseDistrictRegistration>(this._getURL + franchiseId);
  }
  createDistrictFranchise(franchise: IFranchiseDistrictRegistration): Observable<IFranchiseDistrictRegistration> {
    return this.http.post<IFranchiseDistrictRegistration>(this._postURL, franchise)
  }
  activateOrDeactivate(franchise: IActivateDeactivateDistrictFranchise){
    return this.http.post<IActivateDeactivateDistrictFranchise>(this._activateURL, franchise)

  }

}
