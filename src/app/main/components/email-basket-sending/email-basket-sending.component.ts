import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {MainService} from "../../services/main.service";
import {IEmailBucketSend} from "../../services/main";
import {SearchCountryField,
  CountryISO,
  PhoneNumberFormat,} from "ngx-intl-tel-input";

@Component({
  selector: 'app-email-basket-sending',
  templateUrl: './email-basket-sending.component.html',
  styleUrls: ['./email-basket-sending.component.css']
})
export class EmailBasketSendingComponent implements OnInit {


  emailBucketSend: IEmailBucketSend = {} as IEmailBucketSend;
  showErrorName: boolean = false;
  showErrorEmail: boolean = false;
  showErrorPhone: boolean = false;
  showErrorMessage  // ngx-intl-tel-input
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  phoneNumber: any;
  preferredCountries: CountryISO[] = [
    CountryISO.Pakistan,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  emailBasketList: any[] = [];
  totalProperties = 0;
  constructor(private dialogRef: MatDialogRef<EmailBasketSendingComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              private toastr: ToastrService,  private mainService: MainService) { }

  ngOnInit(): void {
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')) {
      this.getAllBasket();
    }
  }

  onClose(event?): void {
    this.dialogRef.close(event);
  }

  onNameInput(){
    this.showErrorName = false;
  }

  onEmailInput(){
    this.showErrorEmail = false;
  }

  onNumberInput(){
    this.showErrorPhone = false;
  }

  onChangeMessage(){
    this.showErrorMessage = false;
  }

  removeFromBsket(id){
    let req = {
      token: localStorage.getItem('landlogic-login-response-token'),
      AdId: id
    }
    this.mainService.removeFromBasket(req).subscribe(res => {
      if(res.status.code === 0){
        this.toastr.success('Remove Basket Item Successfully', 'Success');
        this.emailBasketList = res.result[0].Detail;
        this.totalProperties = this.emailBasketList.length
      }
      else if(res.status.code === 1) {
        this.toastr.error(res.status.message, 'Error');
      }
      else {
        this.toastr.error(res.status.message, 'Error');
      }
    });
  }

  getAllBasket(){
    let req = {
      token: localStorage.getItem('landlogic-login-response-token')
    }
    this.mainService.getAllBasket(req).subscribe(res => {
      if(res.status.code === 0){
        this.emailBasketList = res.result[0].Detail;
        this.totalProperties = this.emailBasketList.length
      }
      else if(res.status.code === 1) {
        this.toastr.error(res.status.message, 'Error');
      }
      else {
        this.toastr.error(res.status.message, 'Error');
      }
    });
  }
}
