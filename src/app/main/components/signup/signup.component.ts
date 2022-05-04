import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import {ToastrService} from "ngx-toastr";
import {UtilsService} from "../../../services/utils.service";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {ISignUp} from "../../services/main";
import {MainService} from "../../services/main.service";
import {Router} from "@angular/router";
import {Password} from "primeng/password";
import {SendlangstatusService} from "../../../profolio/servives/sendlangstatus.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('email') emailElement: ElementRef;
  @ViewChild('password') passwordElement: Password;
  @ViewChild('repassword') repasswordElement: ElementRef;
  @ViewChild('firstName')firstNameElement: ElementRef;
  @ViewChild('lastName') lastNameElement: ElementRef;
  @ViewChild('phone') phoneElement: ElementRef;
  @ViewChild('companyName') companyNameElement: ElementRef;
  @ViewChild('companyPhone') companyPhoneElement: ElementRef;
  @ViewChild('companyFax') companyFaxeElement: ElementRef;
  @ViewChild('companyEmail') companyEmailElement: ElementRef;
  @ViewChild('SecurityCode') securityCodeElement: ElementRef;

  agentheight = false;
  termsCondition = false;
  notifications = false;
  // ngx-intl-tel-input
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Pakistan,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  selectedCountry: any;
  countryList: any[] = [];

  cities: any[] = [];
  selectedCity: any;
  selectedMultipleCity: any;
  selectedCityDealIn: any;
  genSecurityCode: string;
  securityCode: string;
  uploadedFiles: any[] = [];
  signUpObj: ISignUp = {} as ISignUp;

  customerPhoneNumber: any;
  comapnyMobileNumber: any;
  rePassword: any;

  showErrorEmail: boolean = false;
  showErrorPassword: boolean = false;
  showErrorRePassword: boolean = false;
  showErrorFName: boolean = false;
  showErrorLName: boolean = false;
  showErrorPhone: boolean = false;
  showErrorCompanyName: boolean = false;
  showErrorCompanyPhone: boolean = false;
  showErrorComapnyMobile: boolean = false;
  showErrorCompanyFax: boolean = false;
  showErrorCompanyEmail: boolean = false;
  showErrorSecurityCode: boolean = false;

  constructor(private toastr: ToastrService, private utilsService: UtilsService,
              public dialog: MatDialog, private mainService: MainService, private router: Router,
              private sendlangstatusService: SendlangstatusService,) {

  }

  ngOnInit(): void {
    this.selectedCountry = {
      name: "Pakistan",
      flag: "🇵🇰",
      code: "PK",
      dialCode: "+92",
      continent: "Asia",
      currencyCode: "PKR"
    };
    this.getCityList();
    this.makeSecurityCode(4);
    this.getCountryList();
  }

  getCountryList(){
    this.utilsService.getCountrtyList().subscribe(res => {
      if(res){
        this.countryList = res;
      }
    });
  }


  getCityList(){
    this.utilsService.getCitiesList().subscribe(res => {
      if(res.result){
        this.cities = res.result;
      }
    });
  }

  selectCountry(event){

  }

  onChangeCity(event){

  }

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

   makeSecurityCode(length) {
    this.genSecurityCode = this.utilsService.ranCode(length);
    return this.genSecurityCode;
  }

  onclickLogin(){
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
  onCNumberInput(){
    this.showErrorPhone = false;
  }
  onEmailInput(){
    this.showErrorEmail = false;
  }
  onPasswordInput(){
    this.showErrorPassword = false;
  }
  onRePasswordInput(){
    this.showErrorRePassword = false;
  }
  onFNameInput(){
    this.showErrorFName = false;
  }
  onLNameInput(){
    this.showErrorLName = false;
  }
  onCompanyNameInput(){
    this.showErrorCompanyName = false;
  }
  onCompanyPhoneInput(){
    this.showErrorCompanyPhone = false;
  }
  onComapnyMobileInput(){
    this.showErrorComapnyMobile = false;
  }
  onCompanyPhoneFax(){
    this.showErrorCompanyFax = false;
  }
  onCompanyEmailInput(){
    this.showErrorCompanyEmail = false;
  }
  onSecurityCodeInput(){
    this.showErrorSecurityCode = false;
  }

  signUp(){
    if (!this.signUpObj.Email){
        this.toastr.error('Please enter Email', 'Email');
        this.emailElement.nativeElement.focus();
        this.showErrorEmail = true;
        return
    }
    else if (!this.signUpObj.Password){
      this.toastr.error('Please enter Password', 'Password');
      // this.passwordElement.nativeElement.focus();
      this.showErrorPassword = true;
      return
    }
    else if (!this.rePassword){
      this.toastr.error('Please enter Re-Password', 'Re-Password');
      // this.repasswordElement.nativeElement.focus();
      this.showErrorRePassword = true;
      return
    }

    else if (this.signUpObj.Password !== this.rePassword){
      this.toastr.error('Please check Passowrd and Re-Password', 'Passowrd');
      // this.repasswordElement.nativeElement.focus();
      this.showErrorRePassword = true;
      return
    }

    else if (!this.signUpObj.CustomerFirstName){
      this.toastr.error('Please enter First Name', 'First Name');
      this.firstNameElement.nativeElement.focus();
      this.showErrorFName = true;
      return
    }

    else if (!this.signUpObj.CustomerLastName){
      this.toastr.error('Please enter Last Name', 'Last Name');
      this.lastNameElement.nativeElement.focus();
      this.showErrorLName = true;
      return
    }

    else if (!this.customerPhoneNumber){
      this.toastr.error('Please enter mobile number', 'Mobile');
      this.showErrorPhone = true;
      return
    }
    else if(this.agentheight){
     if (!this.signUpObj.CustomerCompanyName){
        this.toastr.error('Please enter Company Name', 'Company Name');
        this.companyNameElement.nativeElement.focus();
        this.showErrorCompanyName = true;
        return
      }
      else if (!this.signUpObj.CustomerCompanyContactNos){
        this.toastr.error('Please enter Company Contact Nos', 'Company Contact Nos');
        this.companyPhoneElement.nativeElement.focus();
        this.showErrorCompanyPhone = true;
        return
      }
      else if (!this.comapnyMobileNumber){
        this.toastr.error('Please enter Company mobile Nos', 'Company Mobile Nos');
        this.showErrorPhone = true;
        return
      }
     else if (!this.signUpObj.CustomerCompanyFaxNos){
       this.toastr.error('Please enter Company Fax Nos', 'Company Fax Nos');
       this.companyFaxeElement.nativeElement.focus();
       this.showErrorCompanyFax = true;
       return
     }
     else if (!this.signUpObj.CustomerCompanyEmail1){
       this.toastr.error('Please enter Company Email', 'Company Email');
       this.companyEmailElement.nativeElement.focus();
       this.showErrorCompanyEmail = true;
       return
     }
    }

    else if(!this.securityCode){
      this.toastr.error('Please enter security code', 'Security Code');
      this.securityCodeElement.nativeElement.focus();
      this.showErrorSecurityCode = true;
      return
    }

    else if(this.securityCode !== this.genSecurityCode){
      this.toastr.error('Please check security code', 'Security Code');
      this.securityCodeElement.nativeElement.focus();
      this.showErrorSecurityCode = true;
      return;
    }

    else if(!this.termsCondition){
      this.toastr.error('Please check Terms and Conditions', 'Terms and Conditions');
      return;
    }

    else if(!this.notifications){
      this.toastr.error('Please check Notifications', 'Notifications');
      return;
    }

    else{
      if(this.agentheight){
        this.signUpObj.CustomerCompanyMobileNos = this.comapnyMobileNumber.e164Number
      }
      this.signUpObj.CustomerPhone1 = this.customerPhoneNumber.e164Number

      this.mainService.signUp(this.signUpObj).subscribe(res => {
        if(res.status.code === 0){
          this.toastr.success('Account Created Successfully', 'Success');
          this.clearFields();
          // this.onclickLogin();
          this.sendlangstatusService.sendLoginPgeStatus(true);
          this.router.navigateByUrl('home');
        }
        else if(res.status.code === 1) {
          this.toastr.error(res.status.message, 'Error');
        }
      });
    }
  }
  clearFields(){
    this.signUpObj.Email = null;
    this.signUpObj.Password = null;
    this.signUpObj.RePassword = null;
    this.signUpObj.CustomerFirstName = null;
    this.signUpObj.CustomerLastName = null;
    this.customerPhoneNumber = null;
    if(this.agentheight){
      this.comapnyMobileNumber = null;
      this.signUpObj.CustomerCompanyName = null;
      this.signUpObj.CustomerCompanyContactNos = null;
      this.signUpObj.CustomerCompanyFaxNos = null;
      this.signUpObj.CustomerCompanyEmail1 = null;
    }
    // this.securityCode = null;
    this.termsCondition = false;
    this.notifications = false;
  }

}
