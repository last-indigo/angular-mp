/* site-header.component.ts */
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'site-header',
  styleUrls: ['site-header.component.scss'],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  constructor(public authService: AuthService) {

  }
}
