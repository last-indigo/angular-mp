import { NgModule } from '@angular/core';

/**
 * otherwise, *ngFor is not working
 */
import { BrowserModule } from '@angular/platform-browser';

/**
 * otherwise, *ngModel is not working
 */
import { FormsModule }   from '@angular/forms';

// todo: cannot be used globally?
// import { SharedKindaModule } from './shared-kinda.module';

import { AppArtemComponent } from './app-artem.component';
import { AppArtemService } from './app-artem.service';

import { SiteHeaderModule } from './site-header';
import { SiteFooterComponent } from './site-footer';

import {
  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,

  CoursesService
} from './courses';

const DECLARATIONS = [
  CoursesComponent,
  CoursesToolboxComponent,
  CourseComponent,
  SiteFooterComponent,
  AppArtemComponent
];

const PROVIDERS = [
  CoursesService,
  AppArtemService
];

const IMPORTS = [
  BrowserModule,
  FormsModule,

  // todo: cannot be used globally?
  // SharedKindaModule,

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
