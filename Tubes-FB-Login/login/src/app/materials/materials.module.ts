import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Materials from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Materials.MatSnackBarModule,
  ],

  exports: [
    Materials.MatSnackBarModule
  ]
})
export class MaterialsModule { }
