import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuery } from '../interfaces/query';
import { GlobalVariable } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private _postURL: string = GlobalVariable.BASE_API_URL+'saveOrUpdateComplaint';
  private _getURL: string = GlobalVariable.BASE_API_URL+'complaintList';
  private _getURLById: string = GlobalVariable.BASE_API_URL+'getComplaint/';

  constructor(private http: HttpClient) { }
  createQueryorCompalint(query: IQuery): Observable<IQuery> {
    return this.http.post<IQuery>(this._postURL, query)
  }

  getQuery(): Observable<IQuery[]>{
    return this.http.get<IQuery[]>(this._getURL);
  }
  getQueryById(complaintId:number): Observable<IQuery>{
    return this.http.get<IQuery>(this._getURLById + complaintId);
  }
}
