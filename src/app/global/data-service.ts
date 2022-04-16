import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

/**
 * Core service to manipulate HTTP services.
 */
@Injectable()
export class DataService {

  /**
   * Requires an HTTPClient object to execute services.
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * A generic type for `get` to call services which respond with one result only.
   */
  public get<T>(url: string, params?: any): Observable<T> {
    let headers = new HttpHeaders();
    headers  = headers.append('responseType', 'json');
    return this.http.get<T>(url, {headers: headers, params: params});
  }

  /**
   * A generic type to get list/array of results.
   */
  public list<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {'responseType': 'json'});
  }

  /**
   * A generic type to post object for storage.
   */
  public post<T>(url: any, object: any): Observable<T> {
    return this.http.post<T>(url, object, {responseType: 'json',headers:{'Access-Control-Allow-Origin':'*'}});
  }

  /**
   * A generic type to put object for storage.
   */
  public put<T>(url: any, object: any): Observable<T> {
    return this.http.put<T>(url, object, {'responseType': 'json'});
  }

  /**
   * A generic type to delete object based on the given `id`.
   */
  public delete<T>(url: any, id: any): Observable<T> {
    return this.http.delete<T>(url + '/' + id, {'responseType': 'json'});
  }

  public customDelete<T>(url : any): Observable<T> {
    return this.http.delete<T>(url, {'responseType': 'json'});
  }

}
