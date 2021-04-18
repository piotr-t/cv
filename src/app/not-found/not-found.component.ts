import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

timeTorRedirect = 1;





  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => { this.timeTorRedirect++; }, 500);
    setTimeout(() => {this.router.navigateByUrl('Home'); }, 5000);
  }

}
