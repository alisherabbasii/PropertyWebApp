import { Injectable } from '@angular/core';
import {DataService} from "../../global/data-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {BlOGS_URL, POST_LISTING_URL} from "../../global/api-endpoints";

@Injectable({
  providedIn: 'root'
})
export class ProfolioService extends DataService {

  constructor(http: HttpClient, ) {
    super(http);
  }

  savePostListing(data: any): Observable<any> {
    return this.post<any>(`${POST_LISTING_URL}Insert`, data);
  }

}
