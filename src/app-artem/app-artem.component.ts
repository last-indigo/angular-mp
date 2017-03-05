import { Component } from '@angular/core';
import { AppArtemService } from './app-artem.service';

@Component({
  selector: 'app-artem',
  templateUrl: 'app-artem.component.html'
})
export class AppArtemComponent {
  public welcomeMessage: string;

  constructor(
    private appArtemService: AppArtemService
  ) {
    this.welcomeMessage = appArtemService.welcomeMessage;
  }
}
