import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// todo: cannot be used globally?
// import { SharedKindaModule } from './shared-kinda.module';

import { AppArtemComponent } from './app-artem.component';
import { AppArtemService } from './app-artem.service';

import { CoursesModule } from './courses';

import { SiteHeaderModule } from './site-header';
import { SiteFooterModule } from './site-footer';

const DECLARATIONS = [
  AppArtemComponent
];

const PROVIDERS = [
  AppArtemService
];

const IMPORTS = [
  BrowserModule,

  // todo: cannot be used globally?
  // SharedKindaModule,

  CoursesModule,
  SiteFooterModule,
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
