import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.scss']
})
export class ArrowUpComponent implements OnInit {





 

  constructor() { }

  navToHome(): void{
    window.scrollTo(0, 0); 
  }

  ngOnInit(): void {

  }

}
