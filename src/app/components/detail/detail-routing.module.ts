import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Routing} from "@enums/routing.enum";
import {DetailComponent} from "./detail.component";

const routes: Routes = [
  {
    path: Routing.Detail,
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {
}
