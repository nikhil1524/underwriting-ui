import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ApplicationService} from './application.service';
import {IApplication} from './Application';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

    private Application: IApplication[] = [];
    private customer_id;
    private selected_year;
    private application_id;
    private error;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private application: ApplicationService) {
    }

    ngOnInit(): void {
        this.getUrlData();
    }

    getApplication() {
        this.application.getApplication(this.customer_id, this.selected_year).subscribe(data => {
            this.Application = data;
            if (this.Application.length === 0) {
                this.error = 'History is not availabel for the year' + this.selected_year;
            }
        }, err => {
            this.error = 'Server error' + err;
        });
    }

    getUrlData() {
        this.route.parent.paramMap.subscribe((params: ParamMap) => {
            this.customer_id = params.get('id');
        });
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.selected_year = params.get('year');
            this.application_id = params.get('applicationId');
            this.getApplication();
        });
    }

    showDetails(application: IApplication) {
        this.router.navigate([application.applicationId + '/health_Status'], {relativeTo: this.route});
    }

    isSelected(application: IApplication) {
        return application.applicationId === this.application_id;
    }

}
