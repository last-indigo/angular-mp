import {Component, forwardRef, Input} from "@angular/core";
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
  template: `
<input
  #dateField
  (input)="callMeWhenChangeHappens(dateField.value)"
  [name]="formControlName"
  [value]="value"
  type="text"
  placeholder="DateCustomControlComponent">
`,

  // without below, will produce error
  // >> No value accessor for form control with name: 'date'
  providers: [
    CUSTOM_DATE_VALUE_ACCESSOR
  ]
})

// @angular/forms/src/directives/control_value_accessor.d.ts
export default class DateCustomControlComponent implements ControlValueAccessor {
  @Input() formControlName: any;

  public writeValue(newValue: any): void {
    // change happened in the model, and we need to update view.
    console.log('writeValue');

    this.value = newValue;
  }

  public registerOnChange(fn: any): void {
    // is called when element is created
    // we will call it when value in the component changed
    console.log('registerOnChange');
    this.callMeWhenChangeHappens = fn;
  }

  public registerOnTouched(fn: any): void {
    // registerOnChange. should
    console.log('registerOnTouched');
    this.callMeWhenTouchedHappens = fn;
  }

  private valuePrivate;
  private get value() {
    return this.valuePrivate;
  };
  private set value(newValue) {
    this.valuePrivate = newValue;
    this.callMeWhenChangeHappens(this.valuePrivate);
  };

  // these are overridden in registerOnChange/registerOnTouched
  public callMeWhenChangeHappens: Function = () => {};
  public callMeWhenTouchedHappens: Function = () => {};

}
