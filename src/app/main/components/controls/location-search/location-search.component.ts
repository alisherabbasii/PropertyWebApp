import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
import {DataService} from '../../../../global/data-service';
import {Location} from '../../../../models/Location'
// interface Location {
//   name: string,
//   code: string
// }
const ApiURL = BASE_FILE_PATH

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  @Output() selectedLocationOutput: EventEmitter<Location> = new EventEmitter();

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.GetLocation()
  }
  tr:boolean = true;
  maxLen:number = 2;
  inputSize:number=200;
  selectedLocatedCountires!: Location;
  filteredCountries: any[];
  countries: any =[]



  filterCountry(event) {
    debugger
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.AreaName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  SelectLocation() {
    debugger
    console.log(this.selectedLocatedCountires)
    this.selectedLocationOutput.emit(this.selectedLocatedCountires);
  }

  GetLocation(){
    debugger;

    let obj = {
      SearchString:"F",
      AreaCityId:1
    }
    this.service.post(`${ApiURL}` + 'api/Area/SearchAll',obj).subscribe((res:any)=>{
      debugger
      console.log("Location",res)
      this.countries = res.result
    })
  }

}
