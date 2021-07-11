import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule , FlexLayoutModule, MaterialImportsModule
  ] ,
  exports: [FlexLayoutModule, MaterialImportsModule]
})
export class SharedModule { }
