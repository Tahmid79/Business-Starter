import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeDefaultComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule , SharedModule
  ],
  exports: [HomeDefaultComponent]
})
export class HomepageModule { }