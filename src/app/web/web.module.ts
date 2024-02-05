import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';


@NgModule({
  declarations: [
    WebComponent,
    TopNavComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    GalleryComponent,
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
