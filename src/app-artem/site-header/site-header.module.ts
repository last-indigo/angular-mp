/* site-header.module.ts */
import { NgModule } from '@angular/core';

// shared -- todo: is bad?
import { SharedKindaModule } from '../shared-dont-like.module';

// specific
import { SiteHeaderComponent } from './site-header.component';

@NgModule({
  imports: [
    SharedKindaModule
  ],
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
