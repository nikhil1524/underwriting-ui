import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer_id;
  selected_year;
  application_id;
  color="red";

Diabetic: boolean = true;
  constructor( private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUrlData()
  }

  getUrlData() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id =parseInt(params.get('id'));
      this.customer_id = id;
      let year = params.get('year');
      this.selected_year=year;
      this.application_id = parseInt(params.get('applicationId'));
    });
  }

  goApplication() {
    let selectedId = this.application_id  ? this.application_id : null;
  this.router.navigate(["../", {applicationId: selectedId}], {relativeTo: this.route}); // Relative Path
  }


}
