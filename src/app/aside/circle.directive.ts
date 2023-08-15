import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCircle]'
})
export class CircleDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }


  ngOnInit(){
    let element = this.el.nativeElement;

    if(element.classList.contains('arrTop')){

      console.log(element.clientHeight,'ellll'); 
    }
  }

  ngAfterViewInit() {
    let element = this.el.nativeElement;

    if(this.el.nativeElement.classList.contains('arrTop')){
      element.style.width = element.clientHeight+'px';
      console.log(element.style,'ellll'); 
    }

  }
}
