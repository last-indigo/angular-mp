import { Component } from '@angular/core';
import { AppArtemService } from './app-artem.service';

@Component({
  selector: 'app-artem',
  templateUrl: 'app-artem.component.html'
})
export class AppArtemComponent {
  public myName: string;

  constructor(
    private appArtemService: AppArtemService
  ) {
    this.myName = `"Component id: ${appArtemService.id}"`;
  }
}
