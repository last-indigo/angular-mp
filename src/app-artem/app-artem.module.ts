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
import { LoginPageComponent } from './login-page';
import { AppArtemService } from './app-artem.service';
import { AuthService } from './auth';

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
import { ProfilerChangeDetectionComponent } from './profiler-change-detection';
import { IndicateLatestDirective } from './common/highlight.directive';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

const DECLARATIONS = [
  LoginPageComponent,

  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  SiteHeaderComponent,
  SiteFooterComponent,

  BreadcrumbsComponent,
  LoginControlsComponent,

  ProfilerChangeDetectionComponent,

  IndicateLatestDirective,

  AppArtemComponent
];

const PROVIDERS = [
  AuthService,
  CoursesService,
  AppArtemService
];

const IMPORTS = [
  BrowserModule,
  FormsModule,
  ModalModule.forRoot(),
  BootstrapModalModule,
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
