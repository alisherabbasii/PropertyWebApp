import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/global/data-service';
import { BASE_FILE_PATH } from 'src/app/global/api-endpoints';
import { Router } from '@angular/router';
import {MainService} from "../../services/main.service";
import {ToastrService} from "ngx-toastr";
import {LoginComponent} from "../login/login.component";
import {EmailBasketSendingComponent} from "../email-basket-sending/email-basket-sending.component";
import {MatDialog} from "@angular/material/dialog";
const ApiURL = BASE_FILE_PATH
@Component({
  selector: 'app-extended-serach',
  templateUrl: './extended-serach.component.html',
  styleUrls: ['./extended-serach.component.css']
})
export class ExtendedSerachComponent implements OnInit {

  emailBasket : boolean = false;
  displayBasic = false;
  totalProperties = 0;
  minimizePopup = false;
  dataView:any = 'list';
  emailBasketList: any[] = [];
  unitAreaList: any[] = [];

  constructor(private service:DataService,private router:Router,
              private mainService: MainService, private toastr: ToastrService, public dialog: MatDialog, ) { }
  GetAllLLCustomer:any
  ngOnInit(): void {
    this.GetpropertyType();
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')) {
      this.getAllBasket();
    }
    this.unitAreaList = [
      {name: 'Square Feet', id: 20},
      {name: 'Square Meter', id: 17},
      {name: 'Square Yards', id: 15},
      {name: 'Marla', id: 14},
      {name: 'Kanal', id: 18},
      {name: 'Acre', id: 16},
      {name: 'Murabba', id: 19}
    ];
  }
  find(){

  }
  moveToDetails(){
    this.router.navigateByUrl('/searchDetails');
  }
  GetpropertyType(){
    let obj ={}
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')) {
      obj = {
        AdAdTypeIds: [1,2],
        AdAreaIds: [1,5,28],
        AdAdClassIds: [51,50],
        AdCityIds: [1],
        AreaMin: 0,
        AreaMax: 999,
        PropertyPriceMin: 0,
        PropertyPriceMax: 99999999,
        token: localStorage.getItem('landlogic-login-response-token')
      }
    }
    else {
      obj = {
        AdAdTypeIds: [1,2],
        AdAreaIds: [1,5,28],
        AdAdClassIds: [51,50],
        AdCityIds: [1],
        AreaMin: 0,
        AreaMax: 999,
        PropertyPriceMin: 0,
        PropertyPriceMax: 99999999
      }
    }
    this.service.post(`${ApiURL}` + 'api/Ad/GetAllLLCustomer',obj).subscribe((res:any)=>{
      this.GetAllLLCustomer = res.result;
      console.log("GetAllLLCustomer ",res.result)
      // this.countries = res.result
    })
  }

  emailBasketClick(event, id){
    this.emailBasketList = [];
    let req = {
      token: localStorage.getItem('landlogic-login-response-token'),
      AdId: id
    }
    this.displayBasic = true;
    if(event.checked === true){
      this.mainService.addtoBasket(req).subscribe(res => {
        if(res.status.code === 0){
          this.toastr.success('Add Basket Successfully', 'Success');
          this.emailBasketList = res.result[0].Detail;
          this.totalProperties = this.emailBasketList.length;
        }
        else if(res.status.code === 1) {
          this.toastr.error(res.status.message, 'Error');
        }
        else {
          this.toastr.error(res.status.message, 'Error');
        }
      });
    }
    else {
      this.mainService.removeFromBasket(req).subscribe(res => {
        if(res.status.code === 0){
          this.toastr.success('Remove Basket Item Successfully', 'Success');
          this.emailBasketList = res.result[0].Detail;
          this.totalProperties = this.emailBasketList.length;
        }
        else if(res.status.code === 1) {
          this.toastr.error(res.status.message, 'Error');
        }
        else {
          this.toastr.error(res.status.message, 'Error');
        }
      });
    }
  }

  togglePopup(){
    document.getElementsByClassName('p-dialog')[0].classList.toggle('bucket-p-dialog-resize');
    this.minimizePopup = !this.minimizePopup;
  }

  changeView(value:any){
    this.dataView=value;
  }

  removeFromBsket(id){
    let req = {
      token: localStorage.getItem('landlogic-login-response-token'),
      AdId: id
    }
    this.mainService.removeFromBasket(req).subscribe(res => {
      if(res.status.code === 0){
        this.toastr.success('Remove Basket Item Successfully', 'Success');
        this.emailBasketList = res.result[0].Detail;
        this.totalProperties = this.emailBasketList.length
        this.GetAllLLCustomer.forEach(item => {
          if(item.AdId === id){
            item.isInBasket = false;
          }
        });
      }
      else if(res.status.code === 1) {
        this.toastr.error(res.status.message, 'Error');
      }
      else {
        this.toastr.error(res.status.message, 'Error');
      }
    });
  }

  getAllBasket(){
    let req = {
      token: localStorage.getItem('landlogic-login-response-token')
    }
    this.mainService.getAllBasket(req).subscribe(res => {
      if(res.status.code === 0){
          this.emailBasketList = res.result[0].Detail;
        this.totalProperties = this.emailBasketList.length
      }
      else if(res.status.code === 1) {
        this.toastr.error(res.status.message, 'Error');
      }
      else {
        this.toastr.error(res.status.message, 'Error');
      }
      if(this.emailBasketList.length > 0){
        this.displayBasic = true;
      }
    });
  }

  sendBasketEmail(){
    this.displayBasic = false;
    const dialog = this.dialog.open(EmailBasketSendingComponent, {
      panelClass: 'tt-dialog',
      width: '850px',
      // height: '500px',
      maxWidth: '850px',
      maxHeight: '520px',
      hasBackdrop: true,
      disableClose: true
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
          this.displayBasic = true
      }
    });
  }

  GetCity(data) {
    this.GetpropertyType();
  }

  GetLocation(data) {
  this.GetpropertyType();
  }

  showHideDropDown(val:any){
    this.GetpropertyType();
   }

  gatAreaType(id){
    let temp : any = this.unitAreaList.filter(item => item.id === id);
    console.log(temp.name)
  }
}
