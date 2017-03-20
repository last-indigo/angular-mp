import { Component, OnInit } from '@angular/core';
import { AppArtemService } from './app-artem.service';
import { AuthService } from './auth';

@Component({
  selector: 'app-artem',
  styleUrls: ['app-artem.component.scss'],
  templateUrl: 'app-artem.component.html'
})
export class AppArtemComponent {
  public welcomeMessage: string;

  constructor(public authService: AuthService,
              private appArtemService: AppArtemService) {
    // NOTE: gets instantiated, only when required as dependency
    this.authService = authService;

    this.welcomeMessage = appArtemService.welcomeMessage;
  }
}
