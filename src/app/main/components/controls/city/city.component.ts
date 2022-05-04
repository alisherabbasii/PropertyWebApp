import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../../../../global/data-service';
import {BASE_FILE_PATH} from '../../../../global/api-endpoints'
import { City } from '../../../../models/City'
// interface City {
//   name: string,
//   code: string
// }
const ApiURL = BASE_FILE_PATH
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Output() selectedCityOutput: EventEmitter<City> = new EventEmitter();
  countries: any[];

  selectedCountry!: City;

  constructor(private service : DataService) {
    // this.countries = [
    //   { name: 'Australia', code: 'AU' },
    //   { name: 'Brazil', code: 'BR' },
    //   { name: 'China', code: 'CN' },
    //   { name: 'Egypt', code: 'EG' },
    //   { name: 'France', code: 'FR' },
    //   { name: 'Germany', code: 'DE' },
    //   { name: 'India', code: 'IN' },
    //   { name: 'Japan', code: 'JP' },
    //   { name: 'Spain', code: 'ES' },
    //   { name: 'United States', code: 'US' }
    // ];
  }

  ngOnInit(): void {
    this.GetAllCities();
    this.selectedCountry.CityName="Islamabad";
    this.selectedCountry.CityCode='1';

  }

  SelectCity() {
    debugger;
    console.log(this.selectedCountry)
    this.selectedCityOutput.emit(this.selectedCountry);
  }
  defaultValue(countryOptions:any){
    this.selectedCountry = countryOptions.find(country => country.CityName === 'Islamabad');
  }
  GetAllCities(){
    let obj = {
      CityIsActive:1
    }
    this.service.post(`${ApiURL}` + 'api/City/GetAll',obj).subscribe((res:any)=>{
      
      this.countries = res.result;
      this.defaultValue(res.result);
    })
  }

}
