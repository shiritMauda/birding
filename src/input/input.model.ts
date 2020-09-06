import { ValidatorFn } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { IArea } from 'src/models/area.model';

export type TInput = 'password' | 'text' | 'email' | 'date' | 'buttonGroup' | 'select' | 'file';
export interface IListItem {
    label: any;
    value: any;
    color?: string;
}
export interface IInputConfig {
    label?: string;
    type: TInput;
    formControlName?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
    list?: IListItem[];
    list$?: Observable<IArea[]>;

}
