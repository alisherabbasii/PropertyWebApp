import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class SendlangstatusService {

  private subject = new Subject<any>();
  private subjectLogin = new Subject<any>();

  sendLangStatus(message: boolean) {
    this.subject.next(message);
  }

  sendLoginPgeStatus(message: boolean) {
    this.subjectLogin.next(message);
  }


  clearMessages() {
    this.subject.next();
    this.subjectLogin.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  onMessageLoginPgeStatus(): Observable<any> {
    return this.subjectLogin.asObservable();
  }
}
