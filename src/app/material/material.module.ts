import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonToggleModule,
  MatCheckboxModule, } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatInputModule]
})
export class MaterialModule { }
