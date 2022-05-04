import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtendedSerachComponent } from './components/extended-serach/extended-serach.component';
import { SearchDetailsComponent } from './components/extended-serach/search-details/search-details.component';
import {HomeComponent} from "./components/home/home.component";
import {HomeBodyControlsComponent} from "./components/home-body-controls/home-body-controls.component";
import {SignupComponent} from "./components/signup/signup.component";
const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeBodyControlsComponent
      },
      {
        path: 'signup',
        component: SignupComponent,
      }]
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
  ,
  {
    path: 'searchDetails/:id',
    component: SearchDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
