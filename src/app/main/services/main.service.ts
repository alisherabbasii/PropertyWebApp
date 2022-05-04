import { Injectable } from '@angular/core';
import {DataService} from "../../global/data-service";
import {
  API_SERVICING_URL,
  API_USERS_URL,
  EMAIL_BASKET,
  ForgotPassword_URL, POST_LISTING_URL,
  SignIn_URL,
  SignUp_URL
} from "../../global/api-endpoints";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class MainService  extends DataService {

  constructor(http: HttpClient, ) {
    super(http);
  }

  signUp(data: any): Observable<any> {
    return this.post<any>(`${SignUp_URL}`, data);
  }

  signIn(data: any): Observable<any> {
    return this.post<any>(`${SignIn_URL}`, data);
  }

  getUserProfile(data: any): Observable<any> {
    return this.post<any>(`${API_USERS_URL}/getprofile`, data);
  }

  forgotPassword(data: any): Observable<any> {
    return this.post<any>(`${ForgotPassword_URL}`, data);
  }

  addtoBasket(data: any): Observable<any> {
    return this.post<any>(`${EMAIL_BASKET}/addtoBasket`, data);
  }

  removeFromBasket(data: any): Observable<any> {
    return this.post<any>(`${EMAIL_BASKET}/RemoveFromBasket`, data);
  }

  getAllBasket(data: any): Observable<any> {
    return this.post<any>(`${EMAIL_BASKET}/GetCustomerBasket`, data);
  }

  getAdDetailById(data: any): Observable<any> {
    return this.post<any>(`${POST_LISTING_URL}GetById`, data);
  }

}
