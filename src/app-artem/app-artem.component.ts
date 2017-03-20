import { Component, OnInit } from '@angular/core';
import { AppArtemService } from './app-artem.service';
import { AuthService } from './auth';

@Component({
  selector: 'app-artem',
  styleUrls: ['app-artem.component.scss'],
  templateUrl: 'app-artem.component.html'
})
export class AppArtemComponent implements OnInit {
  public welcomeMessage: string;

  constructor(private authService: AuthService,
              private appArtemService: AppArtemService) {
    // NOTE: gets instantiated, only when required as dependency
    this.authService = authService;

    this.welcomeMessage = appArtemService.welcomeMessage;
  }

  private ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      const allowed = confirm(`wanna login? (AppArtemComponent#ngOnInit`);
      if (!allowed) {
        throw new Error('Artem, not allowed to login: should stop render');
        return;  // or redirect
      }
      this.authService.login();
    }
  }
}
