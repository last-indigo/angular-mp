import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { FreshnessDetectorService } from './freshness-detector.service';

@Directive({
  selector: '[indicate-latest]'
})

export class IndicateLatestDirective implements OnInit {
  @Input() private date: Date;

  constructor(private el: ElementRef,
              private freshDetectService: FreshnessDetectorService) {
  }

  public ngOnInit() {
    if (this.freshDetectService.verifyIfLatest(this.date, 14)) {
      this.el.nativeElement.style.border = '3px solid green';
    }
  }

}
