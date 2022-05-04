import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfolioHomeComponent} from "./components/profolio-home/profolio-home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PropertyManagementComponent} from "./components/property-management/property-management.component";
import {
  PropertyManagementSubmenuDetailsComponent
} from "./components/property-management-submenu-details/property-management-submenu-details.component";
import {PostListingComponent} from "./components/post-listing/post-listing.component";
import {AccountsProfileHomeComponent} from "./components/accounts-profile-home/accounts-profile-home.component";
import {AccountsUserProfileComponent} from "./components/accounts-user-profile/accounts-user-profile.component";
import {AccountsUserSettingsComponent} from "./components/accounts-user-settings/accounts-user-settings.component";
import {
  AccountsChangePasswordComponent
} from "./components/accounts-change-password/accounts-change-password.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfolioHomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'property-management',
        component: PropertyManagementComponent,
        children: [
          {
            path:'',
            redirectTo: 'property-management-details',
            pathMatch: 'full'
          },
          {
            path: 'property-management-details',
            component: PropertyManagementSubmenuDetailsComponent
          },
          {
            path: 'post-listing',
            component: PostListingComponent
          }
        ]
      },
      {
        path: 'account-profile-home',
        component: AccountsProfileHomeComponent,
        children: [
          {
            path:'',
            redirectTo: 'user-profile',
            pathMatch: 'full'
          },
          {
            path: 'user-profile',
            component: AccountsUserProfileComponent
          },
          {
            path: 'user-setting',
            component: AccountsUserSettingsComponent
          },
          {
            path: 'user-password',
            component: AccountsChangePasswordComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfolioRoutingModule { }
