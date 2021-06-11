import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
