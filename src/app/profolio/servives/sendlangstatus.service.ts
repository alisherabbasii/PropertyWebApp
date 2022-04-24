import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class SendlangstatusService {

  private subject = new Subject<any>();

  sendLangStatus(message: boolean) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
