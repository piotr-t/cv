import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkilsComponent } from './skils/skils.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path: '', component:AppComponent, pathMatch: 'full'},
  {path: '*', redirectTo:'', pathMatch: 'full'},
  {path: '**',pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
