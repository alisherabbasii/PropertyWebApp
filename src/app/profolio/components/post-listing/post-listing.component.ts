import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import {ToastrService} from "ngx-toastr";
import {Dropdown} from "primeng/dropdown";
import {AutoComplete} from "primeng/autocomplete";
import {InputNumber} from "primeng/inputnumber";
@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PostListingComponent implements OnInit {

  @ViewChild('scrollpropertyTypeError') scrollpropertyType: ElementRef;
  @ViewChild('propertyTypeHome') propertyTypeHomeElement: ElementRef;
  @ViewChild('propertyTypePlots') propertyTypePlotsElement: ElementRef;
  @ViewChild('propertyTypeCommercial') propertyTypeCommercialElement: ElementRef;
  @ViewChild('propertySubType') propertySubTypeElement: ElementRef;
  @ViewChild('cityElement') cityElement: Dropdown;
  @ViewChild('locationElement') locationElement: AutoComplete;
  @ViewChild('areaSizeElement') areaSizeElement;
  @ViewChild('occupancyStatusElement') occupancyStatusElement: Dropdown;
  @ViewChild('forSalePriceElement') forSalePriceElement: ElementRef;
  @ViewChild('listingExpiryElement') listingExpiryElement: Dropdown;
  @ViewChild('monthlyRentElement') monthlyRentElement: ElementRef;
  @ViewChild('propertyTitleElement') propertyTitleElement: ElementRef;
  @ViewChild('descriptionElement') descriptionElement: ElementRef;
  @ViewChild('contactPersonElement') contactPersonElement: ElementRef;
  @ViewChild('mobileFirstElement') mobileFirstElement;
  @ViewChild('mobileSecondElement') mobileSecondElement: ElementRef;
  @ViewChild('mobileThirdElement') mobileThirdElement: ElementRef;
  @ViewChild('emailElement') emailElement: ElementRef;
  showErrorCity: boolean = false;
  showErrorLocation: boolean = false;
  showErrorAreaSize: boolean = false;
  showErrorOccupancyStatus: boolean = false;
  showErrorForSalePrice: boolean = false;
  showErrorListingExpiry: boolean = false;
  showErrorMonthlyRent: boolean = false;
  showErrorPropertyTitle: boolean = false;
  showErrorDescription: boolean = false;
  showErrorContactPerson: boolean = false;
  showErrorMobileFirst: boolean = false;
  showErrorMobileSeocnd: boolean = false;
  showErrorMobileThird: boolean = false;
  showErrorEmail: boolean = false;



  selectedPurpose: string = 'For Sale';
  selectedPropertyType: string = '';
  selectedPropertySubType: string = '';
  selectedPropertyTypeList: any[] = [];
  areaSize = null;
  forSaleprice = null;
  selectedCity: any;
  selectedLocation: any;
  propertyTitle: string;
  propertyDiscription: string;
  contactPerson: string;
  landlineNumber: string;
  landlineNumberCC: string;
  landlineNumberAC: string;
  mobilefirst: string;
  mobileSecond: string;
  showMobileSecond: boolean = false;
  mobilethird: string;
  showMobilethird: boolean = false;
  email: string;
  advancePayment: number;
  monthlyInstallment: number;
  remainingInstallment: number;
  enterSearchLocation: any; //Auto Complete Input Location
  cities: any[] = [];

  monthlyRent: number;
  securityDeposit: number;
  securityDepositMonths: number;
  advanceRent: number;
  advanceRentMonths: number;
  changePriceRent: string;
  changeForSalePrice: string;

  selectedAreaUnit: any;
  unitList: any[] = [];

  selectedOccupancy: any;
  occupancyList: any[] = [{name: 'Vacant'} , {name: 'Occupied'}];

  selectedListingExpiry: any;
  listingExpiryList: any[] = [];

  selectedRentContractPeriod: any;
  rentContractPeriodList: any[] = [{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}, {name: 11}, {name: 12}];

  selectedRentContractPeriodType: any;
  rentContractPeriodTypeList: any[] = [{name: 'Month'}, {name: 'Year'}];

  homesPropertyType = ['House', 'Flat', 'Upper Portion', 'Lower Portion', 'Farm House', 'Room', 'Penthouse']
  plotPropertyType = ['Residential Plot', 'Commercial Plot', 'Agricultural Land', 'Industrial Land', 'Plot File', 'Plot Form']
  commercialPropertyType = ['Office', 'Shop', 'Warehouse', 'Factory', 'Building', 'Other'];
  tooltipUnitLists:any[] = ['0 Square Feet','0 Square Meter','0 Square Yards', '0 Marla', '0 Kanal'];
  LocationsDropdown: any[] = [];
  searchLocations: any[] = [];
  showInstallmentPlan: boolean = false;

  // ngx-intl-tel-input
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Pakistan,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  countMobileNumber = 0;
  constructor(private toastr: ToastrService, ) {
    this.cities = [
      {name: 'Islamabad'},
      {name: 'Karachi'},
      {name: 'Lahore'},
      {name: 'Multan'},
      {name: 'Rawalpindi'}
    ];
    this.unitList = [
      {name: 'Square Feet'},
      {name: 'Square Meter'},
      {name: 'Square Yards'},
      {name: 'Marla'},
      {name: 'Kanal'},
      {name: 'Acre'},
      {name: 'Murabba'}
    ];
    this.LocationsDropdown = [
      {name: 'G-10'},
      {name: 'G-11'},
      {name: 'G-12'},
      {name: 'G-13'},
      {name: 'G-14'},
      {name: 'G-15'},
      {name: 'G-16'}
    ];
    this.listingExpiryList = [
      {name: '1 Month'},
      {name: '3 Months'},
      {name: '6 Months'}
    ];

    this.selectedPropertyTypeList = this.homesPropertyType;
    this.selectedAreaUnit = {name: 'Marla'};
  }

  ngOnInit(): void {
  }

  showToolTipList():string{
    let temp:string = ``;
    for(let code of this.tooltipUnitLists){
      temp+=`<span>${code}</span><br>`;
    }
    return temp;
  }

  installmentPlanForSale(){
    this.showInstallmentPlan = !this.showInstallmentPlan;
  }

  selectPurpose(val: string){
    this.selectedPurpose = val;
    this.selectedPropertyType = '';
    this.selectedPropertySubType = '';
    this.selectedPropertyTypeList = this.homesPropertyType;
  }

  selectPropertyType(val: string){
    this.propertyTypeHomeElement.nativeElement.classList.remove('error-field');
    this.propertyTypePlotsElement.nativeElement.classList.remove('error-field');
    this.propertyTypeCommercialElement.nativeElement.classList.remove('error-field');
    this.selectedPropertyType = val;
    this.selectedPropertySubType = '';
    if(val === 'Plots'){
      this.selectedPropertyTypeList = this.plotPropertyType;
    }
    if(val === 'Commercial'){
      this.selectedPropertyTypeList = this.commercialPropertyType;
    }
    else if(val === 'Homes'){
      this.selectedPropertyTypeList = this.homesPropertyType;
    }
  }

  selctPropertySubtype(val: string){
        this.selectedPropertySubType = val;
        this.propertySubTypeElement.nativeElement.classList.remove('error-field');
  }

  showCountryCodeToolTipList():string{
    let temp:string = ``;
      temp=`<span>Enter your country code</span><br><span><span style="font-weight: bold">92</span>-51-1234567</span>`;
    return temp;
  }

  showAreaCodeToolTipList():string{
    let temp:string = ``;
    temp=`<span>Enter your area code</span><br><span>92-<span style="font-weight: bold">51</span>-1234567</span>`;
    return temp;
  }
  selectAreaUnit(event?: any){
    this.showErrorAreaSize = false;
    let tempFeet = '';
    let tempMeter = '';
    let tempYards = '';
    let tempMarla = '';
    let tempKanal = '';
    let tempAcre = '';
    let tempMurabba = '';
    this.tooltipUnitLists = [];
    if (this.selectedAreaUnit.name === 'Square Feet'){

      tempFeet = (Number(this.areaSize) * 1).toFixed(2) + ' Square Feet';
      tempMeter = ((Number(this.areaSize) / 225 ) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = ((Number(this.areaSize) / 225) * 25).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 225) * 1).toFixed(2) + ' Marla';
      tempKanal = ((Number(this.areaSize) / 225) *  0.05).toFixed(2) + ' Kanal';
      tempAcre = ((Number(this.areaSize)  / 225) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = ((Number(this.areaSize) / 225) *  0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Square Meter'){
      tempFeet = ((Number(this.areaSize)/ 20.90) * 225).toFixed(2) + ' Square Feet';
      tempMeter = (Number(this.areaSize) * 1).toFixed(2) + ' Square Meter';
      tempYards = ((Number(this.areaSize) / 20.90) * 25).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 20.90) * 1).toFixed(2) + ' Marla';
      tempKanal = ((Number(this.areaSize) / 20.90) *  0.05).toFixed(2) + ' Kanal';
      tempAcre = ((Number(this.areaSize)  / 20.90) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = ((Number(this.areaSize) / 20.90) *  0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Square Yards'){
      tempFeet = ((Number(this.areaSize) / 25) * 225).toFixed(2) + ' Square Feet';
      tempMeter = ((Number(this.areaSize) / 25 ) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = (Number(this.areaSize) * 1).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 25) * 1).toFixed(2) + ' Marla';
      tempKanal = ((Number(this.areaSize) / 25) *  0.05).toFixed(2) + ' Kanal';
      tempAcre = ((Number(this.areaSize)  / 25) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = ((Number(this.areaSize) / 25) *  0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Marla'){
      tempFeet = (Number(this.areaSize) * 225).toFixed(2) + ' Square Feet';
      tempMeter = (Number(this.areaSize) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = (Number(this.areaSize) * 25).toFixed(2) + ' Square Yards';
      tempMarla = (Number(this.areaSize) * 1).toFixed(2) + ' Marla';
      tempKanal = (Number(this.areaSize) * 0.05).toFixed(2) + ' Kanal';
      tempAcre = (Number(this.areaSize) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = (Number(this.areaSize) * 0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Kanal'){
      tempFeet = ((Number(this.areaSize) / 0.05) * 225).toFixed(2) + ' Square Feet';
      tempMeter = ((Number(this.areaSize) / 0.05 ) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = ((Number(this.areaSize) / 0.05) * 25).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 0.05) * 1).toFixed(2) + ' Marla';
      tempKanal = (Number(this.areaSize) *  1).toFixed(2) + ' Kanal';
      tempAcre = ((Number(this.areaSize)  / 0.05) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = ((Number(this.areaSize) / 0.05) *  0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Acre'){
      tempFeet = ((Number(this.areaSize) / 0.0625) * 225).toFixed(2) + ' Square Feet';
      tempMeter = ((Number(this.areaSize) / 0.0625 ) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = ((Number(this.areaSize) / 0.0625) * 25).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 0.0625) * 1).toFixed(2) + ' Marla';
      tempKanal = ((Number(this.areaSize) / 0.0625) *  0.05).toFixed(2) + ' Kanal';
      tempAcre = (Number(this.areaSize) * 1).toFixed(2) + ' Acre';
      tempMurabba = ((Number(this.areaSize) / 0.0625) *  0.00025).toFixed(2) + ' Murabba';
    }
    else if (this.selectedAreaUnit.name === 'Murabba'){
      tempFeet = ((Number(this.areaSize) / 0.00025) * 225).toFixed(2) + ' Square Feet';
      tempMeter = ((Number(this.areaSize) / 0.00025) * 20.90).toFixed(2) + ' Square Meter';
      tempYards = ((Number(this.areaSize) / 0.00025) * 25).toFixed(2) + ' Square Yards';
      tempMarla = ((Number(this.areaSize) / 0.00025) * 1).toFixed(2) + ' Marla';
      tempKanal = ((Number(this.areaSize) / 0.00025) * 0.05).toFixed(2) + ' Kanal';
      tempAcre = ((Number(this.areaSize)  / 0.00025) * 0.0625).toFixed(2) + ' Acre';
      tempMurabba = (Number(this.areaSize) * 1).toFixed(2) + ' Murabba';
    }
    this.tooltipUnitLists.push(tempFeet);
    this.tooltipUnitLists.push(tempMeter);
    this.tooltipUnitLists.push(tempYards);
    this.tooltipUnitLists.push(tempMarla);
    this.tooltipUnitLists.push(tempKanal);
    this.tooltipUnitLists.push(tempAcre);
    this.tooltipUnitLists.push(tempMurabba);

  }

  getSearchLocations(event) {
    // this.mylookupservice.getResults(event.query).then(data => {
    //   this.results = data;
    // });

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.LocationsDropdown.length; i++) {
      let loc = this.LocationsDropdown[i];
      if (loc.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(loc);
      }
    }
    this.searchLocations = filtered;
  }

  onChangePriceRent(){
    this.showErrorMonthlyRent = false;
  }

  onChangeForSalePrice(){
    this.showErrorForSalePrice = false;
  }

  calculateSecurityDepAndAdvRent(){
    if(this.monthlyRent && this.selectedRentContractPeriodType && this.selectedRentContractPeriod){
      if (this.selectedRentContractPeriodType.name.toLowerCase().trim() === 'month'){
        this.securityDeposit = Number(this.monthlyRent) * Number(this.selectedRentContractPeriod.name);
        this.advanceRent = Number(this.monthlyRent) * Number(this.selectedRentContractPeriod.name);
      }
      else if(this.selectedRentContractPeriodType.name.toLowerCase().trim() === 'year'){
        this.securityDeposit = Number(this.monthlyRent) * (Number(this.selectedRentContractPeriod.name) * 12);
        this.advanceRent = Number(this.monthlyRent) * (Number(this.selectedRentContractPeriod.name) * 12);
      }
    }
  }

  toggleMobile(val){
    if (val.toString().toLowerCase().trim() === 'add'){
      this.countMobileNumber += 1;
      if(this.countMobileNumber <= 2){
        if(this.countMobileNumber === 1){
          this.showMobileSecond = true
        }
        else {
          this.showMobilethird = true;
        }
      }
    }
    else {
      if(this.countMobileNumber === 1){
        this.showMobileSecond = false
      }
      else {
        this.showMobilethird = false;
      }
      this.countMobileNumber -= 1;
    }
  }

  onChangeCity(){
    this.showErrorCity = false;
  }

  onChangeLocation(){
    this.showErrorLocation = false;
  }

  onChangeOccupancyStatus(){
    this.showErrorOccupancyStatus = false;
  }

  onChangeListingExpiry(){
    this.showErrorListingExpiry = false;
  }

  onChangePropertyTitle(){
    this.showErrorPropertyTitle = false;
  }

  onChangeDescription(){
    this.showErrorDescription = false;
  }

  onChangeContactPerson(){
    this.showErrorContactPerson = false;
  }

  onChangeMobileFirst(){
    this.showErrorMobileFirst = false;
  }

  onChangeMobileSeocnd(){
    this.showErrorMobileSeocnd = false;
  }

  onChangeMobileThird(){
    this.showErrorMobileThird = false;
  }

  onChangeEmail(){
    this.showErrorEmail = false;
  }

  saveListing(){
    if (!this.selectedPropertyType){
      this.toastr.error('Please select property type', 'Property Type');
      this.propertyTypeHomeElement.nativeElement.classList.add('error-field');
      this.propertyTypePlotsElement.nativeElement.classList.add('error-field');
      this.propertyTypeCommercialElement.nativeElement.classList.add('error-field');
      this.scrollpropertyType.nativeElement.scrollIntoView();
      }
     if (!this.selectedPropertySubType){
      this.toastr.error('Please select property subtype', 'Property Sub Type');
      if(this.selectedPropertyType){
        this.propertySubTypeElement.nativeElement.classList.add('error-field');
        this.scrollpropertyType.nativeElement.scrollIntoView();
      }
    }
     if (!this.selectedCity){
        this.toastr.error('Please select city', 'City');
        this.cityElement.applyFocus();
        this.showErrorCity = true;
      }
     if (!this.enterSearchLocation){
      this.toastr.error('Please enter Location', 'Location');
      this.locationElement.focusInput();
      this.showErrorLocation = true;
    }
     if (!this.areaSize){
        this.toastr.error('Please enter area size', 'Area Size');
        this.areaSizeElement.input.nativeElement.focus();
        this.showErrorAreaSize = true;
      }
     if (!this.selectedOccupancy){
      this.toastr.error('Please select occupancy status', 'Occupancy Status');
       this.occupancyStatusElement.applyFocus();
       this.showErrorOccupancyStatus = true;
    }
     if (this.selectedPropertyType === 'For Sale' && !this.forSaleprice){
      this.toastr.error('Please enter price', 'Price');
       this.forSalePriceElement.nativeElement.focus();
       this.showErrorForSalePrice = true;
    }
     if (this.selectedPropertyType === 'For Sale' && this.showInstallmentPlan) {
      if (!this.advancePayment)
      {
        this.toastr.error('Please enter advance payment', 'Advance Payment');
      }
      else if (!this.remainingInstallment)
      {
        this.toastr.error('Please enter remaining Installment', 'Remaining Installment');
        return
      }
      else if (!this.monthlyInstallment)
      {
        this.toastr.error('Please enter monthly Installment', 'Monthly Installment');
        return
      }
    }
     if (!this.selectedListingExpiry){
      this.toastr.error('Please select Listing Expiry', 'Listing Expiry');
       this.listingExpiryElement.applyFocus();
       this.showErrorListingExpiry = true;
    }
     if (this.selectedPropertyType === 'Rent' && !this.monthlyRent){
      this.toastr.error('Please enter Monthly Rent', 'Monthly Rent');
       this.monthlyRentElement.nativeElement.focus();
       this.showErrorMonthlyRent = true;
    }
     if (!this.propertyTitle){
      this.toastr.error('Please enter Property Title', 'Property Title');
       this.propertyTitleElement.nativeElement.focus();
       this.showErrorPropertyTitle = true;
    }
     if (!this.propertyDiscription){
      this.toastr.error('Please enter Property Discription', 'Property Discription');
       this.descriptionElement.nativeElement.focus();
       this.showErrorDescription = true;
    }
     if (!this.contactPerson){
      this.toastr.error('Please enter Contact Person', 'Property Contact Person');
       // this.contactPersonElement.nativeElement.focus();
       this.showErrorContactPerson = true;
    }
     if (!this.mobilefirst){
      this.toastr.error('Please enter Mobile #1', 'Mobile #1');
       // this.mobileFirstElement.input.nativeElement.focus();
       this.showErrorMobileFirst = true;
    }
     if (this.showMobileSecond && !this.mobileSecond){
      this.toastr.error('Please enter Mobile #2', 'Mobile #2');
       // this.mobileSecondElement.nativeElement.focus();
       this.showErrorMobileSeocnd = true;
    }
     if (this.showMobilethird && !this.mobilethird){
      this.toastr.error('Please enter Mobile #3', 'Mobile #3');
       // this.mobileThirdElement.nativeElement.focus();
       this.showErrorMobileThird = true;
    }
     if (!this.email){
      this.toastr.error('Please enter Email', 'Email');
       // this.emailElement.nativeElement.focus();
       this.showErrorEmail = true;
    }
     else {

     }
  }
}
