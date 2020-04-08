import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterModule} from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
   public customer_id;

   public show:boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

              ngOnInit(): void {
               
  }

  toggle() {
    this.show = !this.show;
  }
}
