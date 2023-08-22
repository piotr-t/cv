import { Component, OnInit } from '@angular/core';
import * as common from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

  common = common;
  environment = environment;

  constructor() { }

  ngOnInit(): void {
    console.log(environment.docunentationURL ,'environment ');
    
  }

}
