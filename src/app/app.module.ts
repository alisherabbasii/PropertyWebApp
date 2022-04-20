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
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import { DataService } from './global/data-service';
import {ToastrModule} from "ngx-toastr";
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
  }, {provide: LocationStrategy, useClass: PathLocationStrategy}, {
    provide: HTTP_INTERCEPTORS,
    useClass: EstateInterceptorService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
