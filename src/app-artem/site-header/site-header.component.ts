/* site-header.component.ts */
import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'site-header',
  styleUrls: ['site-header.component.scss'],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  constructor(public authService: AuthService) {

  }
}
