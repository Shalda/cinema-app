import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyLettersAndSpaces(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correctCharType = /^[a-zA-Z\s]*$/.test(control.value);
    return !correctCharType ? { charName: { value: control.value } } : null;
  };
}
export function yearFormat(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correctYear = /[12]\d{3}$/.test(control.value);
    return !correctYear ? { year: { value: control.value } } : null;
  };
}

export function exludeZero(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correctRuntime = /^(?!0+$)[0-9]{1,10}$/.test(control.value);
    return !correctRuntime ? { runtime: { value: control.value } } : null;
  };
}

export function urlFormat(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correctURL =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        control.value
      );
    return !correctURL ? { url: { value: control.value } } : null;
  };
}
