import { Component, OnInit } from '@angular/core';
import {UnderwriterService} from './underwriting.service';
import { IUnderwriting } from './Underwriting';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { IDocument } from './document';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-uwdetails',
  templateUrl: './uwdetails.component.html',
  styleUrls: ['./uwdetails.component.css']
})
export class UwdetailsComponent implements OnInit {
  customer_id;
  selected_year;
  application_id;
  closeResult: string;
  document_name: string;
  document_path: string;
 
  Underwriter: IUnderwriting[] = [];
  document: IDocument[] = [];
  constructor(private service: UnderwriterService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUrlData();
    console.log(this.application_id);
    this.getunderwriter();
    this.getDocuments();
  }

  getunderwriter() {
this.service.getUnderwriter(this.customer_id, this.application_id).subscribe((data) => {
  this.Underwriter = data;
  console.log (this.Underwriter);
});
  }

  getDocuments() {
    this.service.getDocuments(this.customer_id, this.application_id).subscribe((data) => {
      this.document =data;
    })
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

  downloadPdf(docs:IDocument) {
    const pdfUrl = "assets/Documents/" + docs.Documentpath + ".pdf";
    const pdfName = docs.DocumentName;
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  open(content, docs:IDocument) {
    this.document_name = docs.DocumentName;
    this.document_path = "assets/Documents/" + docs.Documentpath + ".pdf";
    console.log(this.document_path);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
