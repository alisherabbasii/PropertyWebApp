import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ISignIn, IUserProfile} from "../../services/main";

@Component({
  selector: 'app-logedin-popup',
  templateUrl: './logedin-popup.component.html',
  styleUrls: ['./logedin-popup.component.css']
})
export class LogedinPopupComponent implements OnInit {

  userProfile: IUserProfile = {} as IUserProfile;
  constructor(private dialogRef: MatDialogRef<LogedinPopupComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('landlogic-login-response-userprofile')){
      let temp =  JSON.parse(localStorage.getItem('landlogic-login-response-userprofile'))
      this.userProfile = temp[0];
    }
  }
  logout(){
    localStorage.removeItem('landlogic-login-response');
    localStorage.removeItem('landlogic-login-response-token');
    localStorage.removeItem('landlogic-login-response-userprofile');
    window.location.reload();
  }

  clickProfilio(){
    this.onClose();
    this.router.navigateByUrl('profolio');
  }

  onClose(event?): void {
    this.dialogRef.close(event);
  }

}
