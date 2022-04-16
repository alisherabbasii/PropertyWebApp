import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfolioHomeComponent} from "./components/profolio-home/profolio-home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PropertyManagementComponent} from "./components/property-management/property-management.component";

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
        component: PropertyManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfolioRoutingModule { }
