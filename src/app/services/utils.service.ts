import { Injectable } from '@angular/core';
import {DataService} from "../global/data-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {API_SERVICING_URL} from "../global/api-endpoints";
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService  extends DataService {

  public rentReplaySubject = new ReplaySubject<any>(1);
  public propertyTypeReplaySubject = new ReplaySubject<any>(1);

  setRentActive(u: any){
    this.rentReplaySubject.next(u);
  }

  setPropertyActive(u: any){
    this.propertyTypeReplaySubject.next(u);
  }


  constructor(http: HttpClient, ) {
    super(http);
  }


  public getJSONLanguageKeys(): Observable<any> {
    return this.get<any>(`assets/languagekey.json`);
  }

  getCitiesList(data?: any): Observable<any> {
    return this.post<any>(`${API_SERVICING_URL}City/GetAll`, data);
  }

  getAreaList(data?: any): Observable<any> {
    return this.post<any>(`${API_SERVICING_URL}Area/SearchAll`, data);
  }
}
