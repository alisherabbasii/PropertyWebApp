import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";

const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
    /*children: [{
      path: 'property',
      // loadChildren: () => import('app/features.module').then(m => m.TroubleTicketModule)
    },]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
