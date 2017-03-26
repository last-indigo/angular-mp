// profiler-change-detection.component.ts
import { Component, NgZone, OnInit } from '@angular/core';

/**
 * You should compare default strategy vs OnPush by spent time.
 * To perform this comparison please do follow:
 *
 * Subscribe to this.ngZone.onUnstable and this.ngZone.onStable events.
 * Therefore you will be able to know two time points: start (unstable) and end (stable).
 * Given the difference between these time points
 * you will know how quickly detection tree gets stable.
 *
 * (Profiling example from the lecture uses deprecated API, so demo example will result in error.
 * Please follow the latest reference
 * https://angular.io/docs/ts/latest/api/core/index/NgZone-class.html)
 * (Angular is already hooked by zone. You should simply find corresponding method in ngZone.
 * Please follow the link from previous answer.)
 */
@Component({
  selector: 'profiler-change-detection',
  template: `it's me, profiler-change-detection @Component`
})
export class ProfilerChangeDetectionComponent implements OnInit {
  private timer: number = Date.now();

  constructor(private _ngZone: NgZone) {

  }

  public ngOnInit(): void {
    this._ngZone.onUnstable.subscribe((msg) => {
      this.timer = Date.now();
      console.log('ProfilerChangeDetectionComponent: onUnstable.subscribe msg', msg);
    });
    this._ngZone.onStable.subscribe((msg) => {
      this.timer = Date.now() - this.timer;
      console.log('ProfilerChangeDetectionComponent: onStable.subscribe msg', msg);
      console.log('ProfilerChangeDetectionComponent: _ngZone profiling took %s ms', this.timer);
    });
  }
}
