import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "../blogs/components/blog-home/blog-home.component";
import { ExtendedSerachComponent } from './components/extended-serach/extended-serach.component';
import {HomeComponent} from "./components/home/home.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'extendedSearch',
    component: ExtendedSerachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
