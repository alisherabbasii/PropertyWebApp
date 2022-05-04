import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-accounts-user-profile',
  templateUrl: './accounts-user-profile.component.html',
  styleUrls: ['./accounts-user-profile.component.css']
})
export class AccountsUserProfileComponent implements OnInit {

  email:string = 'sultan.nawaz918@gmail.com';
  selectedCountry: any;
  countryList: any[] = [];
  uploadedFiles: any[] = [];
  listingDetails: boolean = false;
  modifyListName: boolean = false;
  modifyListPhone: boolean = false;
  modifyListCell: boolean = false;
  modifyListEmail: boolean = false;

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

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
