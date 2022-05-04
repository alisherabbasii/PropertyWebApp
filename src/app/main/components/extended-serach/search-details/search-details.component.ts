import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/productservice';
import {Observable} from "rxjs/internal/Observable";
import {POST_LISTING_URL} from "../../../../global/api-endpoints";
import {ToastrService} from "ngx-toastr";
import {MainService} from "../../../services/main.service";
import {IAdDetails} from "../../../services/main";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  adDetails: IAdDetails = {} as IAdDetails;
  constructor(private toastr: ToastrService,  private mainService: MainService, private activatedroute: ActivatedRoute) {
		this.responsiveOptions = [
      {
          breakpoint: '500px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '500px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.activatedroute.paramMap.subscribe(params => {
      this.getAdDetailById(Number(params.get('id')));
    });
  }
  name:any;
  email:any;
  phone:any;
  message:any;
  buyer:any;
  responsiveOptions:any;
  agent:any;
  products: Product[];
  images: any[];
  other:any;
  checked:any;
  ngOnInit(): void {

  }

  printWindow(){
    window.print();
  }

  getAdDetailById(id: number) {
    let req = {}
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')) {
      req = {
        token: localStorage.getItem('landlogic-login-response-token'),
        AdId: id
      }
    }
    else {
      req = {
        AdId: id
      }
    }

    this.mainService.getAdDetailById(req).subscribe(res => {
      if(res.status.code === 0){
        this.adDetails = res.result[0];
        console.log(this.adDetails)
      }
      else {
        this.toastr.error(res.status.message, 'Error');
      }
    });
  }


}
