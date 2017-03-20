import { NgModule } from '@angular/core';

/**
 * otherwise, *ngFor is not working
 */
import { BrowserModule } from '@angular/platform-browser';

/**
 * otherwise, *ngModel is not working
 */
import { FormsModule }   from '@angular/forms';

import { AppArtemComponent } from './app-artem.component';
import { AppArtemService } from './app-artem.service';

import { SiteHeaderComponent } from './site-header';
import { SiteFooterComponent } from './site-footer';

import {
  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  CoursesService
} from './courses';

import { BreadcrumbsComponent } from './breadcrumbs';
import { LoginControlsComponent } from './login-controls';

const DECLARATIONS = [
  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  SiteHeaderComponent,
  SiteFooterComponent,

  BreadcrumbsComponent,
  LoginControlsComponent,

  AppArtemComponent
];

const PROVIDERS = [
  CoursesService,
  AppArtemService
];

const IMPORTS = [
  BrowserModule,
  FormsModule,
];

@NgModule({
  bootstrap: [AppArtemComponent],
  declarations: DECLARATIONS,
  providers: PROVIDERS,
  imports: IMPORTS
})
export class AppArtemModule {
  public id: string = '%id from AppArtemModule%';
  constructor() {
    console.log('AppArtemModule: constructor()');
  }
}
