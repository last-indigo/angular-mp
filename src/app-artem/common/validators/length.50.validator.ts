import {FormControl} from "@angular/forms";

export function Length50Validator(c: FormControl) {
  return (c.value.length > 50) ?
  {artemError: 'Length50Validator did not pass'} :
    null;
}
