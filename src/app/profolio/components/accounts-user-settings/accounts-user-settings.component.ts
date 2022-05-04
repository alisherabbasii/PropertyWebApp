import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-accounts-user-settings',
  templateUrl: './accounts-user-settings.component.html',
  styleUrls: ['./accounts-user-settings.component.css']
})
export class AccountsUserSettingsComponent implements OnInit {

  selectedCountry: any;
  countryList: any[] = [];
  emailsNotification: any;
  newsletter: any;
  automatedReports: any;
  emailFormat: any;
  constructor(private utilsService: UtilsService, ) { }

  ngOnInit(): void {
    this.selectedCountry = {
      name: "Pakistan",
      flag: "🇵🇰",
      code: "PK",
      dialCode: "+92",
      continent: "Asia",
      currencyCode: "PKR"
    };
    this.getCountryList();
  }

  getCountryList(){
    this.utilsService.getCountrtyList().subscribe(res => {
      if(res){
        this.countryList = res;
      }
    });
  }

}
