/* login-controls.component */
import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'login-controls',
  templateUrl: './login-controls.component.html',
  styleUrls: ['./login-controls.component.scss']
})
export class LoginControlsComponent implements OnInit {
  public username: string;

  constructor(public authService: AuthService, private ref: ChangeDetectorRef) {
    console.log('LoginControlsComponent constructor');
  }

  public ngOnInit() {
    this.authService.getUserInfo()
      .subscribe((response) => {
        // but now it should be OK to reason
        this.username = response.name;
        this.ref.markForCheck();
      })
    ;
  }

  public doLogout() {
    this.authService.logout();
  }
}
