import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  //  BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
  ],
})
export class PrimengModule {}
