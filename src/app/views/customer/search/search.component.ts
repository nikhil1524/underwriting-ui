import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public radioGroupForm: FormGroup;
  customer_id;
  Year = [
    {"year":2020},
    {"year":2019},
    {"year":2018},
    {"year":2019},
    {"year":2017}

  ]
  selected_year;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

              ngOnInit() {
                this.radioGroupForm = this.formBuilder.group({
                  'model': ""
                });
              }

  showDetails(id) {
   this.customer_id =id.value;
    console.log("id is" +id.value);
  }

}
