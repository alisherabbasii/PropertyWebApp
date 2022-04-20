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
import { PostListingComponent } from './components/post-listing/post-listing.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {TooltipModule} from "primeng/tooltip";
import {InputTextareaModule} from "primeng/inputtextarea";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AmountToWordPipe} from "../global/pipes/amount-to-word.pipe";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import { FooterComponent } from './components/footer/footer.component';
import {InputNumberModule} from "primeng/inputnumber";

@NgModule({
  declarations: [
    ProfolioHomeComponent,
    PropertyManagementComponent,
    DashboardComponent,
    PropertyManagementSubmenuDetailsComponent,
    PostListingComponent,
    AmountToWordPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProfolioRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    TooltipModule,
    InputTextareaModule,
    AutoCompleteModule,
    NgxIntlTelInputModule,
    InputNumberModule,
  ]
})
export class ProfolioModule { }
