import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupplierRegistration } from '../interfaces/supplierRegistration';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class SupplierRegistrationService {

  private _url: string = GlobalVariable.BASE_API_URL+'supplierList';
  private _getURL: string = GlobalVariable.BASE_API_URL+'getSupplier/';
  private _getListByFranchiseURL: string = GlobalVariable.BASE_API_URL+'supplierListByFranchiseLocal/';
  supplierListByFranchiseLocal
  private _postURL: string = GlobalVariable.BASE_API_URL+'addOrUpdateSupplier';

  constructor(private http: HttpClient) { }

  getSupplier(): Observable<ISupplierRegistration[]> {
    return this.http.get<ISupplierRegistration[]>(this._url);
  }
  getSupplierById(supplierId: number): Observable<ISupplierRegistration> {
    return this.http.get<ISupplierRegistration>(this._getURL + supplierId);
  }
  getSupplierByLocalFranchiseId(franchiseId: number): Observable<ISupplierRegistration> {
    return this.http.get<ISupplierRegistration>(this._getListByFranchiseURL + franchiseId);
  }
  createSupplier(supplier: ISupplierRegistration): Observable<ISupplierRegistration> {
    console.log('call in CreateSupplier Servie');
    return this.http.post<ISupplierRegistration>(this._postURL, supplier)
  }
}
