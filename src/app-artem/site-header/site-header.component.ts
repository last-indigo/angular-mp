/* site-header.component.ts */
import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

import {Store} from '@ngrx/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'site-header',
  styleUrls: ['site-header.component.scss'],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  private authReducerData;

  constructor(public authService: AuthService,
              private store: Store,) {
  }

  ngOnInit() {
    this.authReducerData = this.store.select('authStoreKey');
  }
}
