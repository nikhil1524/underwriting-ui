import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SearchComponent, CustomerDetailsComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
