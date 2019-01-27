import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonToggleModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatTreeModule,
  MatExpansionModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
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
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    DragDropModule
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
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,
    MatOptionModule,
    DragDropModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule]
})
export class MaterialModule { }
