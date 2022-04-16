import { Injectable } from '@angular/core';
import {DataService} from "../../global/data-service";
import {HttpClient} from "@angular/common/http";
import {API_SERVICING_URL, BlOGS_URL} from "../../global/api-endpoints";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends DataService{

  constructor(http: HttpClient, ) {
    super(http);
  }

  getAllBlogs(data: any): Observable<any> {
    return this.post<any>(`${BlOGS_URL}GetAllLL`, data);
  }

  getAllBlogsbyClass(): Observable<any> {
    return this.post<any>(`${API_SERVICING_URL}BlogClass/GetAll`, '');
  }

  getBlogById(data: any): Observable<any> {
    return this.post<any>(`${BlOGS_URL}GetById`, data);
  }
}
