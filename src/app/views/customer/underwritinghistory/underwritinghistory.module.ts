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
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './loader/loader.component';
import {LoaderService} from './loader/loader.service';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './Directive/highlight.directive';
import { HealthStatusComponent } from './health-status/health-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HealthStatus } from './health-status/health-status.service';
import { SafePipe } from './Pipe/safe.pipe';

@NgModule({
   
  declarations: [routingComponents, CustomerDetailsComponent, LoaderComponent, HighlightDirective, 
    HealthStatusComponent, SafePipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    TabsModule.forRoot(),
  ],
  providers: [LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, ApplicationService, CustomerService, UnderwriterService, HistoryService, HealthStatus]
})
export class UnderwritinghistoryModule { }
