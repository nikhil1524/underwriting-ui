import { Component, OnInit } from '@angular/core';
import { HealthStatus } from './health-status.service'
import { IHealthStatus } from './health-status';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {

  HealthStatus: IHealthStatus[] = [];

  customer_id;
  selected_year;
  application_id;
  closeResult: string;
  document_name: string;

  constructor( private service: HealthStatus,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getData(this.customer_id, this.application_id).subscribe( data => {
      this.HealthStatus = data;
      console.log(this.HealthStatus);
    })

  }

  getUrlData() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.selected_year = params.get('year');
      this.application_id = params.get('applicationId');
    });
    this.route.parent.parent.paramMap.subscribe((params: ParamMap) => {
      this.customer_id = params.get('id');
    });
  }


}
