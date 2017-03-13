/* login-controls.component */
import { Component } from '@angular/core';

@Component({
  selector: 'login-controls',
  templateUrl: './login-controls.component.html',
  styleUrls: ['./login-controls.component.scss']
})
export class LoginControlsComponent {
  public username: string;

  constructor() {
    console.log('LoginControlsComponent constructor');
  }
}
