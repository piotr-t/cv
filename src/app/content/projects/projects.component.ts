import { Component, OnInit } from '@angular/core';
import { myProjects } from '../../common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = myProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
