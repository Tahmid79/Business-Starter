import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule , FlexLayoutModule, MaterialImportsModule, SharedComponentsModule
  ] ,
  exports: [FlexLayoutModule, MaterialImportsModule,  SharedComponentsModule]
})
export class SharedModule { }
