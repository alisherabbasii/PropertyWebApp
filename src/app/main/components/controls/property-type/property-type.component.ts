import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../global/data-service';
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
const ApiURL = BASE_FILE_PATH

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css']
})
export class PropertyTypeComponent implements OnInit {

  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Homes';
  PropertyType:any
  renderProperty:any
  homeList:any=''
  ngOnInit(): void {
   // this.GetpropertyType()
  }

  constructor(private service:DataService) {
  }
  
  changeSpan(val:any){
    this.selectedSpan = this.PropertyType.filter(x=>x.AdClassName == val);
    let renderProp = this.selectedSpan
    this.selectedSpan = this.selectedSpan[0].AdClassName
    this.renderProperty = renderProp[0].children
  }

  GetpropertyType(){
  
    let obj ={}
    this.service.post(`${ApiURL}` + 'api/AdClass/GetAll',obj).subscribe((res:any)=>{
      debugger
      this.PropertyType = res.result
      console.log("Propert Type",res)
      // this.countries = res.result
    })
  }

  onHomeClick(val:any){
    debugger;
    this.homeList = val;
  }

}
