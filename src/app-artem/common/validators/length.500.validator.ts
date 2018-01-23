import { FormControl } from '@angular/forms';

export function Length500Validator(c: FormControl) {
  return (c.value.length > 500) ?
  {artemError: 'Length500Validator did not pass'} :
    null;
}
