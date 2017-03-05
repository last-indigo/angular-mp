import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppArtemComponent } from './app-artem.component';
import { AppArtemService } from './app-artem.service';

import { CoursesModule } from './courses';
import { CoursesComponent } from './courses/courses.component';
// TODO: why there was a problem?
import { CourseComponent } from './courses/course/course.component';
// TODO: why there was a problem?

import { SiteHeaderModule } from './site-header';
// import { SiteHeaderComponent } from './site-header/site-header.component';

const DECLARATIONS = [
  AppArtemComponent,
  CoursesComponent,  // TODO: why there was a ZONE problem?
  CourseComponent,  // TODO: why there was a ZONE problem?,
  // SiteHeaderComponent  // TODO: why there was a ZONE problem?
];

const PROVIDERS = [
  AppArtemService
];

const IMPORTS = [
  BrowserModule,

  CoursesModule,
  SiteHeaderModule
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
