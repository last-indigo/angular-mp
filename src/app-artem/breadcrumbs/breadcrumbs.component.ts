/* breadcrumbs.component.ts */
import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  constructor() {
    console.log('BreadcrumbsComponent constructor');
  }
}
