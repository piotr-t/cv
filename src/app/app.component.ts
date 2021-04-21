import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('startAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('1s ease-out', style({ opacity: 1}))])
    ])
  ]
})


export class AppComponent implements OnInit{

  hideNavDown = false;
  hideNavUp = false;
  navPaths = ['Home', 'Skils', 'Article1', 'Contact'];
  navPathsIndex = 0;
  myTemplateVar;



  constructor(private router: Router, private route: ActivatedRoute){}

  @HostListener('scroll', ['$event.target']) onScrollNav(e): void{
  }

  onActivate(outlet, TemplateVar ): void{
    console.log(TemplateVar.activatedRoute.data._value,'TemplateVar');
    
    this.navPathsIndex = this.navPaths.findIndex(v => v === TemplateVar._activatedRoute.snapshot.url[0].path);

    if (TemplateVar.activatedRoute.data._value) {
      this.hideNavUp = TemplateVar.activatedRoute.data._value.hideUpArrow;
      this.hideNavDown = TemplateVar.activatedRoute.data._value.hideDownArrow;
    }

  }



  navToHome(): void{
    this.navPathsIndex + 1 < this.navPaths.length ? this.navPathsIndex++ : this.navPathsIndex = 0;
   setTimeout(() => {
      this.router.navigateByUrl(this.navPaths[this.navPathsIndex]);
    }, 100);
  }

  ngOnInit(): void{


  }
}
