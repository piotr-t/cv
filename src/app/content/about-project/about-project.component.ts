import { Component, OnInit } from '@angular/core';
import * as common from '@angular/common';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

  common = common;

  constructor() { }

  ngOnInit(): void {
  }

}
