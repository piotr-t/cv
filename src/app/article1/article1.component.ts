import { animate, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss'],
  animations: [
    trigger('liAnimation', [
      transition(':enter',
      [query('li', [style({ opacity: 0 }), stagger(1000, [ animate('2s', style({ opacity: 1}))])])]
      )
    ])
  ]
})
export class Article1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
