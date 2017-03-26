// login-page.component.ts
import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {
  public userInfoInput: any = {};

  constructor(public authService: AuthService,
              private ref: ChangeDetectorRef) {
    // NOTE: gets instantiated, only when required as dependency
    this.authService = authService;
  }

  public doLogin() {
    console.log('this.userInfoInput', this.userInfoInput);

    // this returns unsubscribe fn, not useful for chaining
    this.authService.login(this.userInfoInput);

    // app login info is not yet available - observable!
    // this.ref.markForCheck();

    this.authService.getUserInfo()
      .subscribe((response) => {
        // but now login info should be READY
        this.ref.markForCheck();
      })
    ;
  }
}
