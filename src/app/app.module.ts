import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './common/home.component';
import { LoginComponent } from './common/login.component';
import { ContactComponent } from './common/contact.component';
import { ErrorComponent } from './common/error.component';
import { AdminComponent } from './common/admin.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    ErrorComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
