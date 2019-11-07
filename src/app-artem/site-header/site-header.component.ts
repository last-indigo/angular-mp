/* site-header.component.ts */
import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'site-header',
  styleUrls: ['site-header.component.scss'],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent implements OnInit {
  public authReducerData;

  constructor(public authService: AuthService,
              private store: Store<any>,  // TODO type
  ){}

  public ngOnInit() {
    this.authReducerData = this.store.select('authStoreKey');
  }
}
