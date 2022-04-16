import { NgModule } from '@angular/core';
import {BrowserModule, HAMMER_LOADER} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { ProductService } from './services/productservice';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {EstateInterceptorService} from "./global/estate-interceptor.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { DataService } from './global/data-service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    DropdownModule,
  
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),

  ],
  providers: [ DataService, ProductService,{
    provide: HAMMER_LOADER,
    useValue: () => new Promise(() => {})
  }, {provide: LocationStrategy, useClass: HashLocationStrategy}, {
    provide: HTTP_INTERCEPTORS,
    useClass: EstateInterceptorService,
    multi: true
  },],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
