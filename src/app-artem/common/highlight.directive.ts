import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[indicate-latest]'
})

export class IndicateLatestDirective implements OnInit {
  @Input() private date: Date;

  constructor(private el: ElementRef) {
  }

  public ngOnInit() {
    if (this.verifyIfLatest(this.date, 14)) {
      this.el.nativeElement.style.border = '3px solid green';
    }
  }

  /**
   * Create custom directive to change course plate border based on createdDate.
   * If:
   *  createdDate < currentDate &&
   *  createdDate >= currentDate - 14days - fresh course (use green border)
   *
   * If createdDate > currentDate - upcoming course (use blue border)
   * Otherwise - no changes
   *
   * @param dateToCompare
   * @param daysPeriod
   * @returns {boolean}
   */
  private verifyIfLatest(dateToCompare, daysPeriod) {
    // createdDate < currentDate && createdDate >= currentDate - 14days
    const isDate = (dateToCompare instanceof Date);
    if (!isDate) {
      dateToCompare = new Date(dateToCompare);
    }
    if (isNaN(+dateToCompare)) {
      console.error('incorrect date parameter');
      return;
    }

    const isLatestNotFuture =
      !this.isUpcoming(dateToCompare) &&
      this.happenedLessThanDaysAgo(dateToCompare, daysPeriod)
    ;

    return isLatestNotFuture;
  }

  private happenedLessThanDaysAgo(_date, daysAgo) {
    let NDaysAgoDate = new Date();
    NDaysAgoDate.setDate(NDaysAgoDate.getDate() - daysAgo);
    return _date >= NDaysAgoDate;
  }

  private isUpcoming(base) {
    let now = new Date();
    base = new Date(base);

    return base > now;
  }

}
