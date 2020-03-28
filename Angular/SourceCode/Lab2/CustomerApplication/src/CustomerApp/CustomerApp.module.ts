import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './CustomerApp.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
