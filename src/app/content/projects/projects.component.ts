import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = [
    {title:'mitro',subtitle:'', src:'https://mitro.com.pl/#/', description:'', srcCode:''},
    {title:'test',subtitle:'', src:'https://blog.mimacom.com/css-transitions-made-simple-with-angular-animations/', description:'', srcCode:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
