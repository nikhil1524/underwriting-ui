import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';
import {ICustomer} from './Customer';
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
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getUrlData();
        this.customer_info();
    }

    getUrlData() {
        this.route.parent.parent.paramMap.subscribe((params: ParamMap) => {
          console.log(params);
            this.customer_id = params.get('id');
        });
        this.route.parent.paramMap.subscribe((params: ParamMap) => {
            this.selected_year = params.get('year');
            this.application_id = params.get('applicationId');
        });
    }


    customer_info() {
        this.service.getCustomer(this.customer_id).subscribe(data => {
            this.Customer = data;
            console.log(this.Customer);
        });
    }

}
