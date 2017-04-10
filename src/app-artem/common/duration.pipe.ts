import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // The name of the Pipe decorator of class ArtemDurationPipe
  // should be named camelCase with prefix my,
  // however its value is "artemDuration".
  name: 'myArtemDuration'
})
export class ArtemDurationPipe implements PipeTransform {
  public transform(durationMins) {
    const ONE_HOUR_MINS = 60;
    let result = '';

    let hours =
      durationMins > ONE_HOUR_MINS ?
        Math.floor(durationMins / ONE_HOUR_MINS) :
        0
    ;
    if (hours) {
      result += `${hours}h`;
    }
    console.log('durationMins', durationMins);
    let mins = durationMins - ONE_HOUR_MINS * hours;
    if (mins) {
      result += `${mins}m`;
    }
    return result;
  }
}
