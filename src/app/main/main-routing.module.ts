import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "../blogs/components/blog-home/blog-home.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }