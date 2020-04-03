import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer'
    },
    children: [
      {
        path: '',
        redirectTo: 'search'
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Customer Add'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Customer Search'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
