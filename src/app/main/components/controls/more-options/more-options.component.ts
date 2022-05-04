import { Component, OnInit } from '@angular/core';
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
import { DataService } from 'src/app/global/data-service';
import { City } from 'src/app/models/City';
import { UtilsService } from 'src/app/services/utils.service';

const ApiURL = BASE_FILE_PATH
@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.css']
})
export class MoreOptionsComponent implements OnInit {

  
  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Homes';
  PropertyType:any
  renderProperty:any
  homeList:any=''
  ngOnInit(): void {
    this.GetpropertyType();
    this.homeList = localStorage.getItem('propertyType');
 
  }

  constructor(private service:DataService,private srv:UtilsService) {

    this.srv.propertyTypeReplaySubject.subscribe(val => {
      this.selectedSpan = val;
   });
  }
  
  changeSpan(val:any){
  
     // this.homeList=val;
   
    //this.onDropDownChange.emit(val);
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
    localStorage.setItem("propertyType",val);
  }
}
