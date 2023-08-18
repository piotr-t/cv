import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('startAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('1s ease-out', style({ opacity: 1}))])
    ]),
    trigger('startCounter', [
      state('trr', style({width:'100%'})),
      state('false', style({width:'0%' })),
      transition('* => trr', animate("50ms")),
  
    ]),
  ]
})


export class AppComponent implements OnInit, AfterViewInit{

  @HostListener('window:scroll', ['$event.target']) onScrollNav(): void{
    let xPos = this.scroller.getScrollPosition()[1]; 
    if(window.scrollY>this.windowH/10){this.showNavUp = true;}else{this.showNavUp = false;};
  }

  @ViewChild('counter1')counter1: ElementRef;

 

  lessons = true;
  showNavUp = false;
  windowH = 100;
  
 


  constructor(private scroller: ViewportScroller){}
  






  ngAfterViewInit(): void{
    //setTimeout(()=>{this.lessons=true}, 1);
    console.log(window.navigator.language);
  }

  ngOnInit(): void{

    this.windowH = window.innerHeight;
    
    
    
    
    
  }

  
}
