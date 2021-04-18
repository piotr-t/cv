import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkilsComponent } from './skils/skils.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Skils', component: SkilsComponent},
  {path: 'Article1', component: Article1Component},
  {path: 'Contact', component: ContactComponent},
  {path: '', redirectTo: 'Home' , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
