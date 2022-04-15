import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Output() selectedCityOutput: EventEmitter<City> = new EventEmitter();
  countries: any[];

  selectedCountry!: City;

  constructor() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
  }

  ngOnInit(): void {
  }

  SelectCity() {
    debugger
    console.log(this.selectedCountry)
    this.selectedCityOutput.emit(this.selectedCountry);
  }

}
