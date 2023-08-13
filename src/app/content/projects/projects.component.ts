import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = [
    {title:'mitro',subtitle:'', src:'https://mitro.com.pl/#/', description:'Strona internetowa firmy remontowo-budowlanej', srcCode:'', page:'https://mitro.com.pl'},
    {title:'test',subtitle:'', src:'https://blog.mimacom.com/css-transitions-made-simple-with-angular-animations/', description:'', srcCode:''},
    {title:'test',subtitle:'', src:'http://localhost:4200/#projects', description:'', srcCode:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
