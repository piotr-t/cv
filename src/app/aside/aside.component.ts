import { Component, OnInit } from '@angular/core';
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
export class AsideComponent implements OnInit {

  //addClass = 'bg-info';
  articleID = 0;

  icons=[
    {iconContent:'view_headline'},
    {iconContent:'view_column'},
    {iconContent:'error_outline'},
    {iconContent:'chat_bubble_outline'},
    {iconContent:'move_to_inbox', href:'projects'},
  ]



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

}
