/* login-controls.component */
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'login-controls',
  templateUrl: './login-controls.component.html',
  styleUrls: ['./login-controls.component.scss']
})
export class LoginControlsComponent {
  public username: string;

  constructor(public authService: AuthService) {
    console.log('LoginControlsComponent constructor');
  }

  public doLogout() {
    this.authService.logout();
  }
}
