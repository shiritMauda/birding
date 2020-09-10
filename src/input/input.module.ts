import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class InputModule { }
