import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError, finalize, tap} from "rxjs/operators";
import {throwError} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EstateInterceptorService implements HttpInterceptor {
  private busyRequestCount = 0;
  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, ) {
    // this.spinner.show("mySpinner", {
    //   type: "line-scale-party",
    //   size: "large",
    //   bdColor: "rgba(0, 0, 0, 1)",
    //   color: "white",
    //   template:
    //     "<img src='https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp' />",
    // });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if(request.url.includes('api/AdClass/GetAll') || request.url.includes('api/City/GetAll'))
    {

    }
    else {
      this.busy();
    }
    if (request.url.includes('https://country-info.p.rapidapi.com/')){
      request = request.clone({
          headers: request.headers.set('X-RapidAPI-Host', 'country-info.p.rapidapi.com')
        },
      );
      request = request.clone({
          headers: request.headers.set('X-RapidAPI-Key', '7fc42e4037msh1ec594938dc8d56p1abe9bjsn65532579f7d7')
        },
      );
    }
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.status === 200) {
            // Case 200: For success case of most of the HTTP calls, we have to display messages on different(almost every) component
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 0) {
            // Case 0: When Server is down a message will be shown to the user
            if (err.error.apierror) {
              err.error.apierror.message ? this.toastr.error(err.error.apierror.message, err.error.apierror.status) :
                this.toastr.error(err.error.apierror.debugMessage, err.error.apierror.status);
            } else {
              err.error.debugMessage ? this.toastr.error(err.error.debugMessage, 'Failure') : this.toastr.error(err.error.message, err.error.status);
            }
          } else if (err.status === 400 || err.status === 412) {
            if (err.error.apierror) {
              if (err.error.apierror.message === 'Could not parse claims') {
                this.toastr.error('Session Expired! Please ReLogin', 'Failure');
                // this.dialog.open(LockScreenComponent, {
                //   width: '100%',
                //   height: '100%',
                //   maxWidth: '100%',
                //   maxHeight: '100%',
                //   hasBackdrop: false
                // });
              } else {
                // Case 400: When Server throws Bad request message will be shown to the user
                if (err.error.apierror) {
                  err.error.apierror.message ? this.toastr.error(err.error.apierror.message, err.error.apierror.status) :
                    this.toastr.error(err.error.apierror.debugMessage, err.error.apierror.status);
                } else {
                  err.error.debugMessage ? this.toastr.error(err.error.debugMessage, 'Failure') : this.toastr.error(err.error.message, err.error.status);
                }
              }
            }
            else {
              if (err.error.status.code === 1){
                if (err.error.status.message.toLowerCase().trim() !== 'success') {
                  this.toastr.error(err.error.status.message, "Error");
                }
                else {
                  this.toastr.success(err.error.status.message, "Success");
                }

              }
              else{
                this.toastr.error(err.error.status.message, "Error");
              }
            }
          } else if (err.status === 401) {
            // Case 401: When user is un authorize to perform some action, a message will be shown to the user
            if (err.error.apierror) {
              err.error.apierror.message ? this.toastr.error(err.error.apierror.message, err.error.apierror.status) :
                this.toastr.error(err.error.apierror.debugMessage, err.error.apierror.status);
            } else {
              err.error.debugMessage ? this.toastr.error(err.error.debugMessage, 'Failure') : this.toastr.error(err.error.message, err.error.status);
            }
          } else if (err.status === 403) {
            // Case 403: When user is un authenticated, redirect the user to mainn website
            if (err.error.apierror) {
              err.error.apierror.message ? this.toastr.error(err.error.apierror.message, err.error.apierror.status) :
                this.toastr.error(err.error.apierror.debugMessage, err.error.apierror.status);
            } else {
              err.error.debugMessage ? this.toastr.error(err.error.debugMessage, 'Failure') : this.toastr.error(err.error.message, err.error.status);
            }
          } else if (err.status === 404) {
            // Case 404: When not found
            if (err.error.apierror) {
              err.error.apierror.message ? this.toastr.success(err.error.apierror.message, err.error.apierror.status) :
                this.toastr.success(err.error.apierror.debugMessage, err.error.apierror.status);
            } else {
              err.error.debugMessage ? this.toastr.success(err.error.debugMessage, 'Failure') : this.toastr.success(err.error.message, err.error.status);
            }
          } else if (err.status === 409) {
            // Case 409: Record already exists
            this.toastr.error('Given data already exist.', 'Duplicate');
          } else if (err.status === 500) {
            // Case 500: When some Internal Server Error occours, a message will be shown to the user
            if (err.error.apierror) {
              err.error.apierror.message ? this.toastr.error(err.error.apierror.message, err.error.apierror.status) :
                this.toastr.error(err.error.apierror.debugMessage, err.error.apierror.status);
            } else if (err.error) {
              err.error.debugMessage ? this.toastr.error(err.error.debugMessage, 'Failure') : this.toastr.error(err.error.message, err.error.status);
            }
          }
        }
        return throwError(err);
      }),
      finalize(() => {
        this.idle();
      }));
  }

  busy() {
    this.busyRequestCount++;
    if (this.busyRequestCount === 1) {
      this.spinner.show();
    }
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      setTimeout(() => {
        this.spinner.hide();
      });
    }
  }
}
