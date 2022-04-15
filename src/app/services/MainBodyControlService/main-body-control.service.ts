
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainBodyControlService {

  constructor(private http: HttpClient) { }

  FindByCityandLocation(city, location) {
    let queryParams = new HttpParams()
      .append("city", city)
      .append("location", location);

    return this.http.get('http://yourdomain.com/getLocaions', { params: queryParams })
  }
}
