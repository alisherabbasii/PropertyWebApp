import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderWithLogoComponent } from './components/header-with-logo/header-with-logo.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderWithLogoComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    CardModule
  ]
})
export class MainModule { }
