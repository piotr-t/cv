import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {

  @HostListener('window:scroll', ['$event.target']) onScrollNav($event: any): void{
    //console.log($event );
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
