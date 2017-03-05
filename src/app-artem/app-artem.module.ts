import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppArtemComponent } from './app-artem.component';
import { AppArtemService } from './app-artem.service';

const DECLARATIONS = [
  AppArtemComponent
];

const PROVIDERS = [
  AppArtemService
];

const IMPORTS = [
  BrowserModule
];

@NgModule({
  bootstrap: [AppArtemComponent],
  declarations: DECLARATIONS,
  providers: PROVIDERS,
  imports: IMPORTS
})
export class AppArtemModule {
  public id: string = '%id from AppArtemModule%';
}
