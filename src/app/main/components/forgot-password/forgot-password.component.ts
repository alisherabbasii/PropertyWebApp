import {Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";
import {ISignIn} from "../../services/main";
import {ToastrService} from "ngx-toastr";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @ViewChild('email') emailElement: ElementRef;
  showErrorEmail: boolean = false;
  signInObj: ISignIn = {} as ISignIn;

  constructor(private dialogRef: MatDialogRef<ForgotPasswordComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog, private router: Router, private toastr: ToastrService,  private mainService: MainService) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close(true);
  }

  onclickLogin(){
    this.onClose();
    const dialog = this.dialog.open(LoginComponent, {
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
        this.router.navigateByUrl('home');
      }
    });
  }

  onEmailInput(){
    this.showErrorEmail = false;
  }

  onClickSubmit() {
    if (!this.signInObj.Email) {
      this.showErrorEmail = true;
      this.toastr.error('Please enter Email', 'Email');
      this.emailElement.nativeElement.focus();
      return
    } else {
      this.mainService.forgotPassword(this.signInObj).subscribe(res => {
        if (res.status.code === 0) {
          this.toastr.success(res.result, res.status.message);
          this.onclickLogin();
        } else {
          this.toastr.error(res.status.message, 'Error');
        }
      });
    }
  }
}
