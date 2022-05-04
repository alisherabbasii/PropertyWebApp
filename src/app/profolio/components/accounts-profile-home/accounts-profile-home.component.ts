import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accounts-profile-home',
  templateUrl: './accounts-profile-home.component.html',
  styleUrls: ['./accounts-profile-home.component.scss']
})
export class AccountsProfileHomeComponent implements OnInit {

  menuList: any;
  selectedRoute: string;
  constructor(private router: Router) {
    this.menuList = [
      {
        id: 1,
        label: 'User Profile',
        url: 'user-profile'
      }, {
        id: 2,
        label: 'User Setting',
        url: 'user-setting'
      }, {
        id: 3,
        label: 'Change Password',
        url: 'user-password'
      }];

    if ((this.router.url).includes('user-profile')){
      this.selectedRoute = 'User Profile'
    }
    else if ((this.router.url).includes('user-setting')){
      this.selectedRoute = 'User Setting'
    }
    else {
      this.selectedRoute = 'Change Password'
    }

  }

  ngOnInit(): void {

  }

  onChangeRoute(val){
    this.selectedRoute = val;
  }
}
