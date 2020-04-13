import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HistoryService} from './history.service';
import {IHistory} from './History';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    private customer_id;
    private selected_year;
    private error;
    private History: IHistory[] = [];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: HistoryService,
                private SpinnerService: NgxSpinnerService) {
    }

    ngOnInit() {
        this.getURL();
    }

    getURL() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.customer_id = (params.get('id'));
            this.getHistory();
        });
    }

    getHistory() {
        this.service.getHistory(this.customer_id).subscribe(history => {
                this.History = history;
                if (this.History.length === 0) {
                    this.error = 'History is not availabel for SSN No: ' + this.customer_id;
                }
            },
            err => {
                this.error = 'server error' + err;
            });
    }

    selectedyear(history) {
        this.selected_year = history;
        this.router.navigate([history], {relativeTo: this.route});
    }

    isSelected(history: IHistory) {
        return history === this.selected_year;
    }

}
