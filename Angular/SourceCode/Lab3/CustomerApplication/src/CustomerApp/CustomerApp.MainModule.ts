import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'

import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';

import { FormsModule } from '@angular/forms';
import {MainRoutes} from './Routing/CustomerApp.MainRouting'


@NgModule({
  declarations: [
    CustomerComponent, SupplierComponent, HomeComponent, MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
