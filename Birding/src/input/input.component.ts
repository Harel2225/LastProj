import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ValidatorFn, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInputConfig } from './input.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'epr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() config: IInputConfig;
  control = new FormControl();
  /**
     * 
     * @param _ ghost function to be override
     */
  onChangefn = (_) => _;
public get currentValue(){
  return this.control.value;
}
  constructor() { }
  writeValue(obj: any): void {
    this.control.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  ngOnInit() {
    this.control.valueChanges.pipe(
      map(val => {
        this.onChangefn(val);
      })
    ).subscribe();
  }

  btnClick(value) {
    console.log(value);
    this.control.patchValue(value);
  }
}
