import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { IActivateDeactivateLocalFranchise } from '../interfaces/activate-deactivate-local-franchise';
import { IFranchiseLocalRegistration } from '../interfaces/franchise-local-reg';

@Injectable({
  providedIn: 'root'
})
export class FranchiseLocalService {

  
  
  private _listURL: string = GlobalVariable.BASE_API_URL+'franchiseLocalList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getLocalFranchise/';
  private _getByTalukaIdURL: string = GlobalVariable.BASE_API_URL+'getLocalFranchiseListByTaluka/';
  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateFranchiseLocal';
  private _activateURL: string = GlobalVariable.BASE_API_URL+'activateOrDeactivateFranchiseLocal';

  constructor(private http: HttpClient) { }

  getLocalFranchise(): Observable<IFranchiseLocalRegistration[]> {
    return this.http.get<IFranchiseLocalRegistration[]>(this._listURL);
  }
  getLocalFranchiseById(franchiseId: number): Observable<IFranchiseLocalRegistration> {
    return this.http.get<IFranchiseLocalRegistration>(this._getURL + franchiseId);
  }
  getLocalFranchiseListByTaluka(franchiseId: number): Observable<IFranchiseLocalRegistration> {
    return this.http.get<IFranchiseLocalRegistration>(this._getByTalukaIdURL + franchiseId);
  }
  createLocalFranchise(franchise: IFranchiseLocalRegistration): Observable<IFranchiseLocalRegistration> {
    return this.http.post<IFranchiseLocalRegistration>(this._postURL, franchise)
  }
  activateOrDeactivate(franchise: IActivateDeactivateLocalFranchise){
    return this.http.post<IActivateDeactivateLocalFranchise>(this._activateURL, franchise)

  }
}
