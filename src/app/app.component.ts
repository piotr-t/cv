import { animate, state, style, transition, trigger } from '@angular/animations';
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


  @HostListener('window:scroll', ['$event.target']) onScrollNav($event: any): void{
    if(window.scrollY>this.windowH/10){this.showNavUp = true;}else{this.showNavUp = false;};
  }


  @ViewChild('counter1')counter1: ElementRef;

  lessons = false;
  showNavUp = false;
  windowH = 100;
 

  onAnimationEvent(event: AnimationEvent) {
    console.log(event,'event');
    
  }
  constructor(){}
  






  ngAfterViewInit(): void{
    setTimeout(()=>{this.lessons=true}, 1);
  }

  ngOnInit(): void{

    this.windowH = window.innerHeight;
    
  }

  
}
