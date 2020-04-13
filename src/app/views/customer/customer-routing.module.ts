import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import {UnderwritinghistoryComponent} from './underwritinghistory/underwritinghistory.component';
import { HistoryComponent } from './underwritinghistory/history/history.component';
import { ApplicationComponent } from './underwritinghistory/application/application.component';
import { CustomerInfoComponent } from './underwritinghistory/customer-info/customer-info.component';
import { UwdetailsComponent } from './underwritinghistory/uwdetails/uwdetails.component';
import { CustomerDetailsComponent } from './underwritinghistory/customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer'
    },
    children: [
    
      {
        path: '',
        redirectTo: 'underwriting',
        pathMatch: 'full',
      },
    // //   {
    //     path: 'add',
    //     component: AddComponent,
    //     data: {
    //       title: 'Customer Add'
    //     }
    //   },
    //   {
    //     path: 'search',
    //     component: SearchComponent,
    //     data: {
    //       title: 'Customer Search'
    //     },
    //   },
      {
        path: 'underwriting',
        component: UnderwritinghistoryComponent,
        data: {
            title: 'Underwriting'
        },
    children: [
          
        {    path: ':id',
               component: HistoryComponent,
               data: {
                   title: 'history'
               },
            children: [
             {
                       path: ':year',
                       component: ApplicationComponent,
                       data: {
                           title: 'Application'
                       },
                    },
                    {
                        path: ':year/:applicationId',
                        component: CustomerDetailsComponent,
                        data: {
                            title: 'Details'
                        },
                        children: [
                           {
                               path: 'customer_info',
                               component: CustomerInfoComponent,
                               data: {
                                   title: 'Customer Information'
                               },
                           },
                           {
                               path: 'uw_details',
                               component: UwdetailsComponent,
                               data: {
                                   title: 'UW Details'
                               }
                           }
                        ]
                    }
                ]
            }
]
      }
               ]
           } 
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
export const routingComponents=[ UnderwritinghistoryComponent, HistoryComponent, 
                                 ApplicationComponent, CustomerInfoComponent, UwdetailsComponent]
