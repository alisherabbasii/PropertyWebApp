import { NgModule } from '@angular/core';
import {BrowserModule, HAMMER_LOADER} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })

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
