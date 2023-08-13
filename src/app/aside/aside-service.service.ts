import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideServiceService {

  subjectAside = new Subject()

  constructor() { }

  changeAside(e: number): void{
    this.subjectAside.next(e)
  }
}
