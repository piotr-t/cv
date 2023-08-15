import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AsideServiceService } from './aside-service.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

export enum Colors{
  primary,
  secondary,
  success
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void => *', [style({
        width: '0%',
        opacity: 1,
      }),
      animate('.4s', style({ width: '100%', opacity: 1}) )
    ]),
    transition('* => void', [style({
      opacity: 1,
      width: '100%'
    }),
    animate('.4s',style({ width: '0%', opacity: 1,}))
  ])
    ])
  ],
})
export class AsideComponent implements OnInit, AfterViewInit {


  addClass;// = 'bg-info opcityIcons';
  articleID = 0;
 

  icons=[
    {iconContent:'view_headline',matTooltip:'projects section'},
    {iconContent:'view_column',matTooltip:'projects section'},
    {iconContent:'error_outline',matTooltip:'projects section'},
    {iconContent:'chat_bubble_outline',matTooltip:'projects section'},
    {iconContent:'move_to_inbox',matTooltip:'projects section', href:'projects'},
    {matTooltip:'arrow to skils', href:'skils', class:''},
    {iconContent:'arrow_upward', matTooltip:'arrow to header', href:'header', class:'arrTop'},
  ];





  constructor(private service: AsideServiceService) { }

  onAnimationEvent(event: AnimationEvent) {
    console.log(event,'event');
    
  }

  ngOnInit(): void {
    this.service.subjectAside.pipe(distinctUntilChanged()).subscribe((v: any)=>{
      //this.addClass = "bg-" + Colors[v];
      this.articleID = v;
    })  
  }

  ngAfterViewInit() {

  }

}
