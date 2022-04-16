import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfolioRoutingModule } from './profolio-routing.module';
import { ProfolioHomeComponent } from './components/profolio-home/profolio-home.component';
import { PropertyManagementComponent } from './components/property-management/property-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/inputtext";
import { PropertyManagementSubmenuDetailsComponent } from './components/property-management-submenu-details/property-management-submenu-details.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    ProfolioHomeComponent,
    PropertyManagementComponent,
    DashboardComponent,
    PropertyManagementSubmenuDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfolioRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
  ]
})
export class ProfolioModule { }
