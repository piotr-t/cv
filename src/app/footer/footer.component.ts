import { Component, OnInit } from '@angular/core';
import * as common from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  jkj="of CV piotr Troc"

  version = common.VERSION;

  constructor() { }

  ngOnInit(): void {
  }

}
