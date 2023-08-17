import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkilsComponent } from './content/skils/skils.component';
import { AppComponent } from './app.component';
import { AboutProjectComponent } from './content/about-project/about-project.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [

  {path: '', component: ContentComponent, pathMatch: 'full'},
  {path:'about', component: AboutProjectComponent,pathMatch: 'full'},
  {path: '**',pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
