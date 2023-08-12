import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  @Input('appCounter-start')appCounterStart: number;
  @Input('appCounter-positionTop')appCounterPositionTop: number;

  startCounter = true;
  
  @HostListener('window:scroll', ['$event.target']) onScrollNav($event: any): void{
    if(this.startCounter){this.setCount()};
    if(this.el.nativeElement.getBoundingClientRect().top>window.innerHeight){this.startCounter=true}
  }



  constructor(private el: ElementRef) { }

  
  ngAfterViewInit() {
 
}

setCount(){

  let conditionStart = this.el.nativeElement.getBoundingClientRect().top<window.innerHeight;

  let valStart = Number(this.appCounterStart);
  let valEnd = Number(this.el.nativeElement.innerHTML);

  if(conditionStart&&this.startCounter){
    this.startCounter = false;
    let t1 = setInterval(()=>{
      valStart +=1;
      this.el.nativeElement.innerHTML = valStart;
      
      if(valStart === valEnd){clearInterval(t1);}
    },.1);
  }
}


ngOnInit(){
  this.el.nativeElement.style = 'font-size: 60px;color: red';
  this.setCount()
}

}
