import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IapplyRegistration } from '../interfaces/enquiry';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private _url: string = 'https://gembomart.com/virtual-ecommerce/enquiryList';
   
    constructor(private http: HttpClient) { }
  
    getEnquiryList(): Observable<IapplyRegistration[]> {
      return this.http.get<IapplyRegistration[]>(this._url);
    }
   
    
}
