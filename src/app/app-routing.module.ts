import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkilsComponent } from './skils/skils.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent, data: {hideUpArrow: true, hideDownArrow: false}},
  {path: 'Skils', component: SkilsComponent},
  {path: 'Article1', component: Article1Component},
  {path: 'Article2', component: Article2Component},
  {path: 'Article3', component: Article3Component},
  {path: 'Article4', component: Article4Component},
  {path: 'Contact', component: ContactComponent, data: {hideUpArrow: false, hideDownArrow: true}},
  {path: '', redirectTo: 'Home' , pathMatch: 'full', data: {hideUpArrow: true, hideDownArrow: false}},
  {path: '**', component: NotFoundComponent, data: {hideUpArrow: true, hideDownArrow: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
