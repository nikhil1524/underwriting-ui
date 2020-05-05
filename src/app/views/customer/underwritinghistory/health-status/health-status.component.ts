import { Component, OnInit } from '@angular/core';
import { HealthStatus } from './health-status.service'
import { IHealthStatus, rules} from './health-status';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {

  HealthStatus: IHealthStatus;
  Rules: rules[] =[];

  customer_id;
  selected_year;
  application_id;
  closeResult: string;
  document_name: string;
  score:string;
  RulesetVersion;

  constructor( private service: HealthStatus,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUrlData();
    this.service.getData(this.customer_id, this.application_id).subscribe( data => {
      this.HealthStatus = data;
      this.Rules=this.HealthStatus.rules;
      this.RulesetVersion=this.HealthStatus.rulesetVersion;
      
    });

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

  checkStatus(rules:rules): boolean{
    if(rules.status=="SUCCESS")
    {
      return true;
    }
    else {
      return false;
    }
  }
  
}
