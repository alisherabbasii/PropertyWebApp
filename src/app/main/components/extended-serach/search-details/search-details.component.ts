import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  constructor(private productService: ProductService) { 
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
    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    
  }

  printWindow(){
    window.print();
  }

}
