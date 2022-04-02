import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Routing} from "@enums/routing.enum";
const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.Home,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./components/detail/detail.module').then((m) => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
