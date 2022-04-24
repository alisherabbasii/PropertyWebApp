import {Component, OnDestroy, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/productservice';
import {Subscription} from "rxjs";
import {SendlangstatusService} from "../../../profolio/servives/sendlangstatus.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products: Product[];
	responsiveOptions:any;
  isLangUrdu = false;

	constructor(private productService: ProductService, private sendlangstatusService: SendlangstatusService) {

    this.subscription = this.sendlangstatusService.onMessage().subscribe(message => {
      if (message) {
        this.isLangUrdu = message
      } else {
        // clear messages when empty message received
        this.isLangUrdu = false
      }
    });

		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];

    if(localStorage.getItem('languageCodeLandLogic')){
      if(localStorage.getItem('languageCodeLandLogic') === 'ur'){
        this.isLangUrdu = true;
      }
    }
	}
	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
