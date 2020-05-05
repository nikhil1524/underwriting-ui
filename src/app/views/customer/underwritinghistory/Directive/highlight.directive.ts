import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight: string;

  constructor(private el: ElementRef) { 
  }

ngOnInit() {
  this.highlight(this.appHighlight);
}
  
highlight(status: string) {
    if(status == "SUCCESS") {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.opacity = '0.6';
    } else {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.opacity = '0.6';
    } 
  }

}
