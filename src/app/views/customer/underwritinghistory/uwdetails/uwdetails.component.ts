import { Component, OnInit } from '@angular/core';
import {UnderwriterService} from './underwriting.service';
import { IUnderwriting } from './Underwriting';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-uwdetails',
  templateUrl: './uwdetails.component.html',
  styleUrls: ['./uwdetails.component.css']
})
export class UwdetailsComponent implements OnInit {
  customer_id;
  selected_year;
  application_id;

  Underwriter: IUnderwriting[] = [];
  constructor(private service: UnderwriterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUrlData();
    console.log(this.application_id);
    this.getunderwriter();
  }

  getunderwriter() {
this.service.getUnderwriter(this.customer_id, this.application_id).subscribe((data) => {
  this.Underwriter = data;
  console.log (this.Underwriter);
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

}
