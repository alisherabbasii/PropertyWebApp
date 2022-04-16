import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {PaginatorModule} from "primeng/paginator";
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    BlogHomeComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    TabMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    MenubarModule
  ]
})
export class BlogsModule { }
