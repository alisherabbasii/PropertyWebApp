import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { ControlsComponent } from './components/controls/controls.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ControlsComponent,
  ],
  imports: [
    MainRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    CommonModule
  ]
})
export class MainModule { }
