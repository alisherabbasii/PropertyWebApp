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
import { HomeBodyControlsComponent } from './components/home-body-controls/home-body-controls.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {MatDialogModule} from "@angular/material/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {MultiSelectModule} from "primeng/multiselect";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {CaptchaModule} from "primeng/captcha";

import { SearchDetailsComponent } from './components/extended-serach/search-details/search-details.component';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from "primeng/dialog";
import {TooltipModule} from "primeng/tooltip";
import { BathsComponent } from './components/controls/baths/baths.component';
import { PurposeComponent } from './components/controls/purpose/purpose.component';
import { GalleryComponent } from './components/controls/gallery/gallery.component';
import { PhotoService } from '../services/PhotoService';
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import { LogedinPopupComponent } from './components/logedin-popup/logedin-popup.component';
import { EmailBasketSendingComponent } from './components/email-basket-sending/email-basket-sending.component';
import { MoreOptionsComponent } from './components/controls/more-options/more-options.component';
import {AmountToWordPipe} from "../global/pipes/amount-to-word.pipe";
import {ProfolioModule} from "../profolio/profolio.module";
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
        AreaRangeComponent,
        SearchDetailsComponent,
        AreaRangeComponent,
        HomeBodyControlsComponent,
        SignupComponent,
        LoginComponent,
        ForgotPasswordComponent,
        BathsComponent,
        PurposeComponent,
        GalleryComponent,
        LogedinPopupComponent,
        EmailBasketSendingComponent,
        MoreOptionsComponent,
        // AmountToWordPipe
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
    GalleriaModule,
    AutoCompleteModule,
    TranslateModule,
    MatDialogModule,
    InputTextModule,
    RadioButtonModule,
    NgxIntlTelInputModule,
    MultiSelectModule,
    CheckboxModule,
    InputTextareaModule,
    FileUploadModule,
    CaptchaModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    DialogModule,
    TooltipModule,
    PasswordModule,
    DividerModule,
    ProfolioModule
  ],
    providers: [ProductService, MainBodyControlService,PhotoService],
    exports: [
        FooterComponent,
        // AmountToWordPipe
    ]
})
export class MainModule { }
