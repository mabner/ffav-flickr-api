import { Component, OnInit } from '@angular/core';
import { FlickrResponse } from 'src/app/models/flickr-response';
import { FlickrService } from 'src/app/services/flickr.service';

@Component( {
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: [ './photo-gallery.component.css' ]
} )
export class PhotoGalleryComponent implements OnInit
{
  flickrResponse!: FlickrResponse;

  constructor ( private flickrService: FlickrService ) { }

  ngOnInit (): void
  {
    this.flickrService.getPhotos().subscribe( res =>
    {
      this.flickrResponse = res;
    }, error =>
    {
      console.log( error );
    } );
  }
}