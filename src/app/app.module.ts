import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { CardComponent } from './commons/card/card.component';
import { ButtonAddToCartComponent } from './commons/button-add-to-cart/button-add-to-cart.component';
import {MenuBarComponent} from './commons/menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import {HomeRoutingModule} from "./components/home/home-routing.module";
import {DetailRoutingModule} from "./components/detail/detail-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonAddToCartComponent,
    MenuBarComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
