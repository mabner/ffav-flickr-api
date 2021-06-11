import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickrResponse } from '../models/flickr-response';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class FlickrService
{
  flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

  constructor ( private http: HttpClient ) { }

  getPhotos (): Observable<FlickrResponse>
  {
    return this.http.get<FlickrResponse>( this.flickrUrl );
  }
}
