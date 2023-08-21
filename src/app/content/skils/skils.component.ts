import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {


  cards = [
    {
      title: 'Javascript i Typescript',
      subtitle:'',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    },
    {
      title: 'Angular CLI',
      subtitle:'',
      imgSrc: 'angular.png',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    },
    {
      title: 'NodeJS',
      subtitle:'Tworzenie warstwy backendu przy pomoca frameworku Node.js',
      imgSrc: 'nodejs.png',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    },
    {
      title: 'MongoDB',
      subtitle:'Obiektowa, nierelacyjna baza danych.',
      imgSrc: 'mongo.png',
      list:['tworzenie szablonu bazy danych', 'tworzenie zapytań do bazy danych']
    },
    {
      title: 'Bootstrap',
      subtitle:'Tworzenie ',
      imgSrc: 'bootstrap-logo.png',
      list:[
        'tworzenie layoutu aplikacji', 
        'korzystanie z komponentów bootstrapa',
        'responsywny widok'
        ]
    },
    {
      title: 'Angular Material',
      subtitle:'',
      imgSrc: 'angularMaterial.png',
      list:['korzystanie z wbudowanych komponentów', 'tworzenie zapytań do bazy danych']
    },
    {
      title: 'ThreeJS',
      subtitle:'Rozbudowana biblioteka js do tworzenia trójwymiarowej grafiki.',
      imgSrc: 'three.png',
      list:['tworzenie animacji', 'implementacja podstawowych elementów takich ']
    },
    {
      title: 'GitHub',
      subtitle:'',
      imgSrc: 'github.png',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    }, 
    {
      title: 'Cypress',
      subtitle:'',
      imgSrc: 'cypress.png',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    }, 
    {
      title: 'JasmineJS',
      subtitle:'',
      imgSrc: 'JasmineJS.svg',
      list:['tworzenie instancji serwera', 'tworzenie zapytań do bazy danych']
    }, 
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
