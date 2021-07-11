import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    HomeDefaultComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [HomeDefaultComponent]
})
export class HomepageModule { }
