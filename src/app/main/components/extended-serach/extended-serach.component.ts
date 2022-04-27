import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/global/data-service'; 
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
import { Router } from '@angular/router';
const ApiURL = BASE_FILE_PATH
@Component({
  selector: 'app-extended-serach',
  templateUrl: './extended-serach.component.html',
  styleUrls: ['./extended-serach.component.css']
})
export class ExtendedSerachComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
  GetAllLLCustomer:any
  ngOnInit(): void {
    debugger
    this.GetpropertyType()
  }
  find(){
    
  }
  moveToDetails(){
    this.router.navigateByUrl('/searchDetails');
  }

  ngAfterViewInit() {
    $(window).scroll(function(){
      var fromTop = $(window).scrollTop();
      $("#searchBar").css('margin', '-' + (100 - fromTop) + 'px 0px 0px 0px');
  });
}

  GetpropertyType(){
    
     let  Where = {
        AdAdTypeIds: [1,2],
        AdAreaIds: [1,5,28],
        AdAdClassIds: [51,50],
        AdCityIds: [1],
        AreaMin: 0,
        AreaMax: 999,
        PropertyPriceMin: 0,
        PropertyPriceMax: 99999999
        }
    let obj ={}
    this.service.post(`${ApiURL}` + 'api/Ad/GetAllLLCustomer',obj).subscribe((res:any)=>{
      this.GetAllLLCustomer = res.result;
      console.log("GetAllLLCustomer ",res.result)
      // this.countries = res.result
    })
  }
}
