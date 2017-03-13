import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs';
import { LoginControlsComponent } from './login-controls';

@NgModule({
  imports: [],
  declarations: [
    BreadcrumbsComponent,
    LoginControlsComponent
  ],
  exports: [
    BreadcrumbsComponent,
    LoginControlsComponent
  ]
})
export class SharedKindaModule {
  constructor() {
    console.log('SharedKindaModule constructor');
  }
}
