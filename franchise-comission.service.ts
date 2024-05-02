import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
import { ILocalFranchiseCommision } from '../interfaces/comission-local-franchise';

@Injectable({
  providedIn: 'root'
})
export class FranchiseComissionService {

  private getLocalFranchiseComissionURL : string = GlobalVariable.BASE_API_URL+'getSellerOrderLocalFranchiseComission/';

  constructor(private http: HttpClient) { }
  // Return the comission for the local franchise base on franchiseID
  getLocalFranchiseComission(franchiseId: number): Observable<ILocalFranchiseCommision[]> {
    return this.http.get<ILocalFranchiseCommision[]>(this.getLocalFranchiseComissionURL+franchiseId);
  }


}
