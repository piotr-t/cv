import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contrast = false;
  hideStyle = false;

  constructor() { }

  removeStyle(): void{
    document.querySelectorAll("link[rel='stylesheet']").forEach(p=>{p.innerHTML="<p>ok</p>";});
    document.querySelectorAll("*").forEach(a=>{a.removeAttribute("style");a.removeAttribute("class");});
    this.hideStyle = true;
  }

  addStyle(): void{location.reload();  this.hideStyle = false  }

  incrementFont(): void{}

  hightContrast(): void{
    this.contrast = !this.contrast; 
  }


  ngOnInit(): void {
    this.incrementFont();
  }

}
