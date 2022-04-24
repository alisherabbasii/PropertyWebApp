import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { ProductService } from '../services/productservice';
import { HttpClientModule } from '@angular/common/http';
import { ControlsComponent } from './components/controls/controls.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderWithLogoComponent } from './components/header-with-logo/header-with-logo.component';
import { PriceRangeComponent } from './components/controls/price-range/price-range.component';
import { SingleColumnDropDownComponent } from './components/controls/single-column-drop-down/single-column-drop-down.component';
import { PropertyTypeComponent } from './components/controls/property-type/property-type.component';
import { BedsComponent } from './components/controls/beds/beds.component';
import { CityComponent } from './components/controls/city/city.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { LocationSearchComponent } from './components/controls/location-search/location-search.component';
import { ExtendedSerachComponent } from './components/extended-serach/extended-serach.component';
import { AreaRangeComponent } from './components/controls/area-range/area-range.component';
import { MainBodyControlService } from '../services/MainBodyControlService/main-body-control.service';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BodyComponent,
        ControlsComponent,
        FooterComponent,
        HeaderWithLogoComponent,
        PriceRangeComponent,
        SingleColumnDropDownComponent,
        PropertyTypeComponent,
        BedsComponent,
        CityComponent,
        LocationSearchComponent,
        ExtendedSerachComponent,
        AreaRangeComponent
    ],
  imports: [
    MainRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    CarouselModule,
    HttpClientModule,
    AutoCompleteModule,
    TranslateModule,
  ],
    providers: [ProductService, MainBodyControlService],
    exports: [
        FooterComponent
    ]
})
export class MainModule { }
