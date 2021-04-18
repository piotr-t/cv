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

  hideNav = false;
  navPaths = ['Home', 'Skils', 'Article1', 'Contact'];
  navPathsIndex = 0;
  myTemplateVar;

  constructor(private router: Router, private route: ActivatedRoute){}

  @HostListener('scroll', ['$event.target']) onScrollNav(e): void{
    console.log(e, 'e');

  }

  onActivate(outlet, TemplateVar ): void{
    this.navPathsIndex = this.navPaths.findIndex(v => v === TemplateVar._activatedRoute.snapshot.url[0].path);
    // console.log(TemplateVar, 'TemplateVar');
    if (outlet.route) {
      this.hideNav = (outlet.route.component.name === 'NotFoundComponent') ? true : false;
    } else { this.hideNav = false; }
  }



  navToHome(): void{
    // console.log(myTemplateVar._activatedRoute.snapshot.url[0].path , 'myTemplateVar');
    // console.log(this.navPathsIndex);
    this.navPathsIndex + 1 < this.navPaths.length ? this.navPathsIndex++ : this.navPathsIndex = 0;
   setTimeout(() => {
      this.router.navigateByUrl(this.navPaths[this.navPathsIndex]);
    }, 100);
  }

  ngOnInit(): void{

  }
}
