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

  Underwriter: IUnderwriting[]=[];
  constructor(private service: UnderwriterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getunderwriter();
    this.getUrlData();
  }

  getunderwriter() {
this.service.getUnderwriter().subscribe(data => {
  this.Underwriter=data;
});
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

}
