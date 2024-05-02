import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../data/global';
export interface IReferal{
  franchiseType:string;
  fullName:string;
  franchiseFirmName:string;
  franchiseContactNo:string;
  franchiseAddress:string;
  percentBenefit:number;
}


@Injectable({
  providedIn: 'root'
})
export class ReferalService {

  private _getURL: string = GlobalVariable.BASE_API_URL+'getMyReferral';
  
  constructor(private http: HttpClient) { }

 
  getRefralData(mobileNumber : number,role:string): Observable<IReferal[]>{
    return this.http.get<IReferal[]>(this._getURL+"/"+mobileNumber+"/"+role);
  }
 
}
