import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ApplicationService} from './application.service';
import {IApplication} from './Application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  Application:IApplication[]=[];

  customer_id;
  selected_year;
  application_id;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private application: ApplicationService) { }

  ngOnInit(): void {
   this.getUrlData();
   this.getApplication();
    
}

getApplication () {
this.application.getApplication().subscribe(data => {
  this.Application=data;
});
}

getUrlData() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id =parseInt(params.get('id'));
    this.customer_id = id;
    let year = params.get('year');
    this.selected_year=year;
    this.application_id= parseInt(params.get('applicationId'));
  });
}

showDetails(application:IApplication){
  this.router.navigate([application.application_id], {relativeTo: this.route});
}

isSelected(application:IApplication){
return application.application_id === this.application_id;
}

}