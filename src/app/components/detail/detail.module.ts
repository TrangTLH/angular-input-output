import {NgModule} from '@angular/core';
import {DetailRoutingModule} from "./detail-routing.module";
import {CommonModule} from "@angular/common";
import {DetailComponent} from "./detail.component";

@NgModule({
  declarations: [],
  imports: [
    DetailRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    DetailComponent
  ]
})
export class DetailModule {
}
