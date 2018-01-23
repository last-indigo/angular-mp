/* breadcrumbs.component.ts */
import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  public currentCourseId;
  constructor(
    private route: ActivatedRoute
  ) {
    console.log('BreadcrumbsComponent constructor');
  }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      // TODO: params in BreadcrumbsComponent are NOT AVAILABLE!
      console.error('params in BreadcrumbsComponent are NOT AVAILABLE', params);
      // this.currentCourseId = params.id;
    });
  }
}
