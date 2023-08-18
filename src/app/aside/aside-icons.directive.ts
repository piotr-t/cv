import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { AsideServiceService } from './aside-service.service';
import { NgTemplateOutlet, PathLocationStrategy, ViewportScroller, WeekDay, ɵBrowserPlatformLocation, ɵDomAdapter,Location } from '@angular/common';

@Directive({
  selector: '[AsideIcons]',
})
export class AsideIconsDirective implements OnInit{

  @Input()AsideIcons: number;
  @Input()AsideIconsTop: number = 0;

   /** 
    * Desc
    * @arg void
    */
  @HostListener('window:scroll', ['$event.target']) onScrollNav(): void{

    let xPos = this.scroller.getScrollPosition()[1]; 
    let elHeight = this.element.nativeElement.offsetHeight;
    let elTop = this.element.nativeElement.offsetTop;

    if(((elTop-this.AsideIconsTop)<xPos)&&(xPos<(elTop+elHeight))){this.service.changeAside(this.AsideIcons||0)}
  }

  constructor(private service: AsideServiceService, private scroller: ViewportScroller, private element: ElementRef/* , public day: WeekDay */, 
  private location: Location) {
   }

   
   public set Location(v : string) {
    /** 
    * Desc
    */
    console.log(v,'v');
    
   }
   
   /** 
    * Desc
    */
   ngOnInit(): void {

    /** 
    * Desc
    */
    this.onScrollNav()
     

   }

}
