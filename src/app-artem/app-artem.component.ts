import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgZone
} from '@angular/core';
import { AppArtemService } from './app-artem.service';
import { AuthService } from './auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'app-artem',
  styleUrls: ['app-artem.component.scss'],
  templateUrl: 'app-artem.component.html'
})
export class AppArtemComponent implements OnInit {
  public welcomeMessage: string;
  private timer: number = Date.now();

  constructor(public authService: AuthService,
              private _ngZone: NgZone,
              private appArtemService: AppArtemService) {
    // NOTE: gets instantiated, only when required as dependency
    this.authService = authService;

    this.welcomeMessage = appArtemService.welcomeMessage;
  }

  public ngOnInit(): void {
    this._ngZone.onUnstable.subscribe((msg) => {
      this.timer = Date.now();
      console.log('AppArtemComponent: onUnstable.subscribe msg', msg);
    });
    this._ngZone.onStable.subscribe((msg) => {
      this.timer = Date.now() - this.timer;
      console.log('AppArtemComponent: onStable.subscribe msg', msg);
      console.log('AppArtemComponent: _ngZone profiling took %s ms', this.timer);
    });
  }
}
