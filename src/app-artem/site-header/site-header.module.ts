import { NgModule } from '@angular/core';

import { SiteHeaderComponent } from './site-header.component';

@NgModule({
  imports: [],
  declarations: [SiteHeaderComponent],
  providers: [],

  /**
   * THIS IS VERY IMPORTANT!
   * Otherwise, there will be ZONE problem,
   * and parent could not use this module
   */
  exports: [SiteHeaderComponent]
})
export class SiteHeaderModule {

}
