import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialImportsModule } from '../material-imports/material-imports.module';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule, MaterialImportsModule, FlexLayoutModule
  ], exports: [FooterComponent]
})
export class SharedComponentsModule { }
