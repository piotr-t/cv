import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon';
import { SkilsComponent } from './content/skils/skils.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CounterDirective } from './counter.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArrowUpComponent } from './aside/arrow-up/arrow-up.component';
import { AsideComponent } from './aside/aside.component';
import { AsideIconsDirective } from './aside/aside-icons.directive';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SafePipe } from './content/safe.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CircleDirective } from './aside/circle.directive';
import { AboutProjectComponent } from './content/about-project/about-project.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SkilsComponent,
    CounterDirective,
    HeaderComponent,
    FooterComponent,
    ArrowUpComponent,
    AsideComponent,
    AsideIconsDirective,
    ContentComponent,
    ProjectsComponent,
    SafePipe,
    CircleDirective,
    AboutProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [], //{provide: LocationStrategy, useClass: HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
