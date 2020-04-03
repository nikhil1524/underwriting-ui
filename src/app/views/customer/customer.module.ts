import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ CustomerComponent, AddComponent, SearchComponent ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
