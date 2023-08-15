import { Component, OnInit } from '@angular/core';
import { articles } from '../common'

export enum sectionID{
  skils,
  projects
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title ='some text';
  articles = articles;


  constructor() { }

  getSectionID(id: number){
    return sectionID[id] 
  }

  ngOnInit(): void {
  }

}
