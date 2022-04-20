import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-management-submenu-details',
  templateUrl: './property-management-submenu-details.component.html',
  styleUrls: ['./property-management-submenu-details.component.scss']
})
export class PropertyManagementSubmenuDetailsComponent implements OnInit {

  selectedHeader: string = '';
  premiumLists: any
  constructor() { }

  ngOnInit(): void {
    this.selectedHeader = 'Premium Listings';
    this.premiumLists = [
      {
        total: 5,
        used: 3,
        available: 2
      }
    ]
  }

  selectHeader(val: string){
    this.selectedHeader = val;
  }

}
