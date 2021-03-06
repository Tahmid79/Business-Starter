import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { DescriptionComponent } from './components/description/description.component';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    HomeDefaultComponent,
    GalleryComponent,
    SubheaderComponent,
    DescriptionComponent,
    NewsContainerComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule , SharedModule
  ],
  exports: [HomeDefaultComponent]
})
export class HomepageModule { }
