import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfolioHomeComponent} from "./components/profolio-home/profolio-home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PropertyManagementComponent} from "./components/property-management/property-management.component";
import {
  PropertyManagementSubmenuDetailsComponent
} from "./components/property-management-submenu-details/property-management-submenu-details.component";
import {PostListingComponent} from "./components/post-listing/post-listing.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfolioRoutingModule { }
