
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtendedSearchService {

  constructor(private http: HttpClient) { }

  getCustomers() {

    return this.http.post('http://erpsystems.ddns.net:8091/api/Ad/GetAllLLCustomer',
    
    {
        "Where":{
        "AdAdTypeIds": [1,2],
        "AdAreaIds": [1,5,28],
        "AdAdClassIds": [51,50],
        "AdCityIds": [1],
        "AreaMin": 0,
        "AreaMax": 999,
        "PropertyPriceMin": 0,
        "PropertyPriceMax": 99999999
    }
    }
    )
  }
}
