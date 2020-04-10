import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-underwritinghistory',
  templateUrl: './underwritinghistory.component.html',
  styleUrls: ['./underwritinghistory.component.css']
})
export class UnderwritinghistoryComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  customer_id;
  constructor( private router: Router,
               private route: ActivatedRoute,
               private fb: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  showDetails() {
   this.customer_id=this.registerForm.get('search').value;
   this.router.navigate([this.customer_id], {relativeTo: this.route});
  }

}
