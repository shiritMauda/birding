import { Injectable, Input } from '@angular/core';
import { IInputConfig, IListItem } from 'src/input/input.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { IArea } from 'src/models/area.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  selectList = new ReplaySubject<IArea[]>(1);
  inputs: IInputConfig[] = [

    {
      formControlName: 'bird_name',
      label: 'שם ציפור ',
      type: 'text',
      error: 'שדה חובה',
      validators: [Validators.maxLength(10), Validators.minLength(2), Validators.required]
    },
    {
      formControlName: 'spot_date',
      label: 'תאריך צפייה',
      value: '',
      type: 'date',
      error: 'שדה חובה',
      validators: []
    },
    {
      formControlName: 'area',
      label: 'איזור',
      value: '',
      type: 'select',
      error: 'שדה חובה',
      validators: [],
      list$: this.selectList.asObservable()
    }

  ];
  constructor(private fb: FormBuilder) { }
  getForm() {
    const form = this.fb.group({});
    this.inputs.forEach(i => {
      const control = this.fb.control(i.value, i.validators);
      form.addControl(i.formControlName, control);
    });
    return form;
  }

  setArea(list: any[]) {
    this.selectList.next(list);
  }
}
