/* site-header.module.ts */
import { NgModule } from '@angular/core';

// specific
import { SiteFooterComponent } from './site-footer.component';

@NgModule({
  imports: [

  ],
  declarations: [SiteFooterComponent],
  providers: [],

  /**
   * THIS IS VERY IMPORTANT!
   * Otherwise, there will be ZONE problem,
   * and parent could not use this module
   */
  exports: [SiteFooterComponent]
})
export class SiteFooterModule {

}
