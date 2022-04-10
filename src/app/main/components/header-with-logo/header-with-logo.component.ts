import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-with-logo',
  templateUrl: './header-with-logo.component.html',
  styleUrls: ['./header-with-logo.component.css']
})
export class HeaderWithLogoComponent implements OnInit {

  showBuyOptions:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  expandHome(){
   this.showBuyOptions = !this.showBuyOptions;
  }
}
