import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "../blogs/components/blog-home/blog-home.component";
import { ControlsComponent } from './components/controls/controls.component';
import { ExtendedSerachComponent } from './components/extended-serach/extended-serach.component';
import {HomeComponent} from "./components/home/home.component";
const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
  },
  {

    path: 'plots',
    component: HomeComponent,
  },
  {
    path: 'expandedSearch',
    component: ExtendedSerachComponent,
  },
  {
    path: 'Rent',
    component: HomeComponent,
  }
  ,
  {
    path: 'Commercial',
    component: HomeComponent,
  },
  {
    path: 'Plots',
    component: HomeComponent,
  },
  {
    path: 'Homes',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
