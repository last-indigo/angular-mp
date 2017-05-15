import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/**
 * otherwise, *ngFor is not working
 */
import { BrowserModule } from '@angular/platform-browser';

/**
 * otherwise, *ngModel is not working
 */
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppArtemComponent } from './app-artem.component';
import { LoginPageComponent } from './login-page';
import { AppArtemService } from './app-artem.service';
import { AuthService } from './auth';
import { FreshnessDetectorService } from './common/freshness-detector.service';

import { SiteHeaderComponent } from './site-header';
import { SiteFooterComponent } from './site-footer';

import {
  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  CoursesService
} from './courses';
import { CourseAddComponent } from './course-add/course-add.component'

import { BreadcrumbsComponent } from './breadcrumbs';
import { LoginControlsComponent } from './login-controls';
import { ProfilerChangeDetectionComponent } from './profiler-change-detection';

import { IndicateLatestDirective } from './common/highlight.directive';
import { ArtemDurationPipe } from './common/duration.pipe';
import { MyOrderByPipe } from './courses/order-by.pipe';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import DateCustomControlComponent from './form-controls-custom/date-control.component';
import { AuthorsSelectComponent } from './authors-select/authors-select.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateCourses } from './courses/courses.guards';

const DECLARATIONS = [
  LoginPageComponent,

  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  CourseAddComponent,

  SiteHeaderComponent,
  SiteFooterComponent,

  BreadcrumbsComponent,
  LoginControlsComponent,

  ProfilerChangeDetectionComponent,

  IndicateLatestDirective,
  ArtemDurationPipe,
  MyOrderByPipe,

  DateCustomControlComponent,
  AuthorsSelectComponent,

  AppArtemComponent
];

const PROVIDERS = [
  AuthService,
  AuthGuard,
  CanDeactivateCourses,
  CoursesService,
  FreshnessDetectorService,
  AppArtemService
];

const IMPORTS = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  ModalModule.forRoot(),
  BootstrapModalModule,
  RouterModule.forRoot(ROUTES, {useHash: true})
  // `useHash` enables the location strategy that uses the URL fragment instead of the history API.
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
