import { ValidatorFn, Validators } from '@angular/forms';
const PHONE_PATTERN = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$';
const ENGLISH_LETTERS = '^[a-zA-Z]+$';
export class MyValidators {
    static get ValidatePhone(): ValidatorFn[] {
        return [
            Validators.pattern(PHONE_PATTERN),
            Validators.maxLength(15),
            Validators.minLength(8),
        ];
    }
    static get ValidatePassword(): ValidatorFn[] {
        return [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(ENGLISH_LETTERS)
        ];
    }
    static get ValidateFirstName(): ValidatorFn[] {
        return [
            Validators.required,
        ];
    }
}
