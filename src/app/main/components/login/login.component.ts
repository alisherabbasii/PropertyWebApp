import {AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {ISignIn, ISignUp} from "../../services/main";
import {ToastrService} from "ngx-toastr";
import {MainService} from "../../services/main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('email') emailElement: ElementRef;
  @ViewChild('password') passwordElement: ElementRef;

  showErrorEmail: boolean = false;
  showErrorPassword: boolean = false;
  rememberMe: boolean = false;
  signInObj: ISignIn = {} as ISignIn;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialog, private toastr: ToastrService,  private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    if(localStorage.getItem('landlogic-login-useremail') && localStorage.getItem('landlogic-login-useremail') !== 'undefined'){
      this.signInObj.Email = localStorage.getItem('landlogic-login-useremail')
    }
    if(localStorage.getItem('landlogic-login-userepassword')  && localStorage.getItem('landlogic-login-userepassword') !== 'undefined'){
      this.signInObj.Password = localStorage.getItem('landlogic-login-userepassword')
    }
    if(localStorage.getItem('landlogic-login-useremail') && localStorage.getItem('landlogic-login-userepassword')
      && localStorage.getItem('landlogic-login-useremail') !== 'undefined'
      && localStorage.getItem('landlogic-login-userepassword') !== 'undefined'){
      this.rememberMe = true
    }
  }

  onClose(event?): void {
    this.dialogRef.close(event);
  }

  forgotPassowrd(){
    this.onClose();
    const dialog = this.dialog.open(ForgotPasswordComponent, {
      panelClass: 'tt-dialog',
      width: '350px',
      // height: '500px',
      maxWidth: '350px',
      maxHeight: '520px',
      hasBackdrop: true,
      disableClose: true
      // data: rowData,
      // autoFocus: false
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  onEmailInput(){
    this.showErrorEmail = false;
  }
  onPasswordInput(){
    this.showErrorPassword = false;
  }

  onClickLogin(){
    if (!this.signInObj.Email){
      this.showErrorEmail = true;
      this.toastr.error('Please enter Email', 'Email');
      this.emailElement.nativeElement.focus();
      return
    }
    else if (!this.signInObj.Password){
      this.showErrorPassword = true;
      this.toastr.error('Please enter Password', 'Password');
      // this.passwordElement.nativeElement.focus();
      return
    }
    else{
      this.onChangeRemeber();
      this.mainService.signIn(this.signInObj).subscribe(res => {
        if(res.status.code === 0){
          localStorage.setItem('landlogic-login-response', JSON.stringify(res.result));
          localStorage.setItem('landlogic-login-response-token', res.result[0].token);
          let req = {
            token : res.result[0].token
          }
          this.mainService.getUserProfile(req).subscribe(res => {
            if (res.status.code === 0) {
              console.log(res.result)
              localStorage.setItem('landlogic-login-response-userprofile', JSON.stringify(res.result));
            }
          });
          this.toastr.success('Login Successfully', 'Success');
          window.location.reload();
          // this.router.navigateByUrl(this.router.url);
          this.onClose(true);
        }
        else if(res.status.code === 1 || res.status.code === 22 || res.status.code === 23) {
          if(res.status.message.trim() === 'Invalid password'){
            this.showErrorPassword = true;
            // this.passwordElement.nativeElement.focus();
          }
          this.toastr.error(res.status.message, 'Error');
        }
      });
    }
  }

  onChangeRemeber(){
    if (this.rememberMe){
      localStorage.setItem('landlogic-login-useremail', this.signInObj.Email);
      localStorage.setItem('landlogic-login-userepassword', this.signInObj.Password);
    }
    else {
      localStorage.removeItem('landlogic-login-useremail');
      localStorage.removeItem('landlogic-login-userepassword');
    }
  }

}
