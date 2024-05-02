import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IActivateDeactivateTalukaFranchise } from '../interfaces/activate-deactivate-taluka-franchise';
import { IFranchiseTalukaRegistration } from '../interfaces/franchise-taluka-reg';

@Injectable({
  providedIn: 'root'
})
export class FranchiseTalukaService {

  
  private _listURL: string = GlobalVariable.BASE_API_URL+'franchiseTalukaList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getTalukaFranchise/';
  private _getByDistrictIdURL: string = GlobalVariable.BASE_API_URL+'getTalukaFranchiseListByDistrict/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateFranchiseTaluka';
  private _activateURL: string = GlobalVariable.BASE_API_URL+'activateOrDeactivateFranchiseTaluka';

  constructor(private http: HttpClient) { }

  getTalukaFranchise(): Observable<IFranchiseTalukaRegistration[]> {
    return this.http.get<IFranchiseTalukaRegistration[]>(this._listURL);
  }
  getTalukaFranchiseById(franchiseId: number): Observable<IFranchiseTalukaRegistration> {
    return this.http.get<IFranchiseTalukaRegistration>(this._getURL + franchiseId);
  }
  getTalukaFranchiseListByDistrict(franchiseId: number): Observable<IFranchiseTalukaRegistration> {
    return this.http.get<IFranchiseTalukaRegistration>(this._getByDistrictIdURL + franchiseId);
  }

  createTalukaFranchise(franchise: IFranchiseTalukaRegistration): Observable<IFranchiseTalukaRegistration> {
    return this.http.post<IFranchiseTalukaRegistration>(this._postURL, franchise)
  }
  activateOrDeactivate(franchise: IActivateDeactivateTalukaFranchise){
    return this.http.post<IActivateDeactivateTalukaFranchise>(this._activateURL, franchise)

  }

}
