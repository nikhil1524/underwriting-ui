import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { CustomerRoutingModule } from './customer-routing.module';
import {SearchModule} from './search/search.module';
import {UnderwritinghistoryModule} from './underwritinghistory/underwritinghistory.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ CustomerComponent, AddComponent ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SearchModule,
    UnderwritinghistoryModule,
    HttpClientModule
    
  ]
})
export class CustomerModule { }
