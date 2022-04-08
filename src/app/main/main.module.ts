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

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ControlsComponent,
    FooterComponent,
    HeaderWithLogoComponent,
  ],
  imports: [
    MainRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [ProductService],
})
export class MainModule { }
