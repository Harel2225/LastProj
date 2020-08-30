import { ValidatorFn } from '@angular/forms';

export type IType = 'password' | 'text' | 'email' | 'date' | 'phone' | 'buttonGroup';
export interface IListItem {
    label: string;
    value: any;
    color?: string;
}

export interface IInputConfig {
    label?: string;
    type: IType;
    formControlName?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
    list?: IListItem[];
}
