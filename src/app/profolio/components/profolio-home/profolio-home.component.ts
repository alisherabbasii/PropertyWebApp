import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profolio-home',
  templateUrl: './profolio-home.component.html',
  styleUrls: ['./profolio-home.component.scss']
})
export class ProfolioHomeComponent implements OnInit {

  menuList: any;
  constructor() {
    this.menuList = [
      {
        id: 1,
        label: 'Dashboard',
        url: 'dashboard'
      }, {
        id: 2,
        label: 'Property Management',
        url: 'property-management'
      }, {
        id: 3,
        label: 'Message Center',
        url: 'message-center'
      }, {
        id: 4,
        label: 'My Account & Profiles',
        url: 'account-profile'
      }, {
        id: 5,
        label: 'Reports',
        url: 'reports'
      }, {
        id: 6,
        label: 'Tools',
        url: 'tools'
      }, {
        id: 6,
        label: 'Agency Staff',
        url: 'agency-staff'
      }, {
        id: 6,
        label: 'Clients & Leads',
        url: 'clients-leads'
      }, {
        id: 6,
        label: 'Agency Website',
        url: 'agency-website'
      }, {
        id: 6,
        label: 'Advertise',
        url: 'advertise'
      }
    ]
  }

  ngOnInit(): void {
  }

}
