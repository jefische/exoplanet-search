import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeValidator(fromKey: string, toKey: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const from = group.get(fromKey)?.value;
    const to = group.get(toKey)?.value;

    if (from == null || to == null || from === '' || to === '') {
      return null; // only check when both fields are filled
    }
    return Number(from) <= Number(to) ? null : { range: true };
  };
}
