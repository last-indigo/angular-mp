/* login-controls.component */
import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'login-controls',
  templateUrl: './login-controls.component.html',
  styleUrls: ['./login-controls.component.scss']
})
export class LoginControlsComponent implements OnInit {
  private user: Observable<any>;

  constructor(public authService: AuthService, private ref: ChangeDetectorRef) {
    console.log('LoginControlsComponent constructor');
  }

  public ngOnInit() {
    this.user = this.authService.getUserInfo();
    this.user
      .subscribe((currentUser) => {
        // but now it should be OK to reason
        this.ref.markForCheck();
      })
      // NOTE: .do doesn't work on subscription
      // .do((currentUser) => {
      //   console.log('currentUser from .do()', currentUser);
      // });
    ;

    // setInterval(() => {
    //   this.ref.markForCheck();
    // }, 10000);
  }

  public doLogout() {
    this.authService.logout();
  }
}
