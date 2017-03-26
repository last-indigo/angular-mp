// login-page.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {
  public userInfoInput: any = {};

  constructor(public authService: AuthService) {
    // NOTE: gets instantiated, only when required as dependency
    this.authService = authService;
  }

  public doLogin() {
    console.log('this.userInfoInput', this.userInfoInput);
    this.authService.login(this.userInfoInput);
  }
}
