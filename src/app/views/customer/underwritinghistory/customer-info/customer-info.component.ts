import { Component, OnInit } from '@angular/core';
import {CustomerService} from './customer.service';
import { ICustomer } from './Customer';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  Customer: ICustomer[] = [];
  customer_id;
  selected_year;
  application_id;


  constructor(private service: CustomerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customer_info();
    this.getUrlData();
  }

  getUrlData() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      let id =parseInt(params.get('id'));
      this.customer_id = id;
      let year = params.get('year');
      this.selected_year=year;
      this.application_id = parseInt(params.get('applicationId'));
    });
  }


  customer_info() {
   this.service.getCustomer().subscribe(data => {
  this.Customer=data;
   });
  }

}
