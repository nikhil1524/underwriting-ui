import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HistoryService} from './history.service';
import { IHistory } from './History';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
customer_id;
selected_year;
History:IHistory[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: HistoryService) { }

  ngOnInit(): void {
   this.getURL(); 
   this.getHistory();
  }

  getURL() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id =parseInt(params.get('id'));
      this.customer_id = id;
    });
  }

  getHistory(){
    this.service.getHistory().subscribe(history => {
    this.History=history;
    }); 
   
  }

  sortdata() {
    this.History.sort((obj1, obj2)  => {
      return obj1.year - obj2.year;
    });
  }

  selectedyear(history: IHistory) {
    this.selected_year=history.year;
    this.router.navigate([history.year], {relativeTo: this.route});
  }

  isSelected(history: IHistory) {
  return history.year === this.selected_year;
  }

};
