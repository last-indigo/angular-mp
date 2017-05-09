import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

// example from http://plnkr.co/edit/V9JTfxtl7XOlyUdEujqr?p=preview
const CUSTOM_DATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,

  // tslint error:
  // >> Avoid using forwardRef in variable
  // >> Avoid using forwardRef in class "DateCustomControlComponent"
  useExisting: forwardRef(() => DateCustomControlComponent),
  multi: true
};

@Component({
  selector: 'date-custom-control',
  template: '<input type="text" placeholder="DateCustomControlComponent">',

  // without below, will produce error
  // >> No value accessor for form control with name: 'date'
  providers: [
    CUSTOM_DATE_VALUE_ACCESSOR
  ]
})
export default class DateCustomControlComponent implements ControlValueAccessor {
  public writeValue(obj: any): void {
    console.log('writeValue');
  }

  public registerOnChange(fn: any): void {
    console.log('registerOnChange');
  }

  public registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }

}
