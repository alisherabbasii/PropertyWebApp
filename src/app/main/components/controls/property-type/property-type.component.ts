import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {DataService} from '../../../../global/data-service';
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
const ApiURL = BASE_FILE_PATH

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css']
})
export class PropertyTypeComponent implements OnInit {
  @Output() onDropDownChange = new EventEmitter<any>();

  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Homes';
  PropertyType:any
  renderProperty:any
  homeList:any=''
  ngOnInit(): void {
    this.GetpropertyType();
 
  }

  constructor(private service:DataService) {
  }
  
  changeSpan(val:any){
    this.onDropDownChange.emit(val);
    this.selectedSpan = this.PropertyType.filter(x=>x.AdClassName == val);
    let renderProp = this.selectedSpan;
    this.selectedSpan = this.selectedSpan[0].AdClassName;
    this.renderProperty = renderProp[0].children;
    
  }

  GetpropertyType(){
    
    let obj ={}
    this.service.post(`${ApiURL}` + 'api/AdClass/GetAll',obj).subscribe((res:any)=>{
      this.PropertyType = res.result;
      this.changeSpan(this.selectedSpan);
      console.log("Propert Type",res)
      // this.countries = res.result
    })
  }

  onHomeClick(val:any){
    this.homeList = val;
  }

}
