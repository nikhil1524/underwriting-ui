import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService} from './application/application.service'
import {routingComponents } from '../customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component'
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {CustomerService} from './customer-info/customer.service';
import {UnderwriterService} from './uwdetails/underwriting.service';
import {HistoryService} from './history/history.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  // declarations: [UnderwritinghistoryComponent, HistoryComponent, 
  //   ApplicationComponent, CustomerInfoComponent, UwdetailsComponent],
    declarations: [routingComponents, CustomerDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
  ],
  providers: [ApplicationService, CustomerService, UnderwriterService, HistoryService]
})
export class UnderwritinghistoryModule { }
