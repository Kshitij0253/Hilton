import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { FooterComponent } from './component/footer/footer.component';
import { WhatsappToggleComponent } from './component/whatsapp-toggle/whatsapp-toggle.component';
import { ProductsComponent } from './component/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    FooterComponent,
    WhatsappToggleComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
