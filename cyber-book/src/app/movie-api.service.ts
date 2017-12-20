import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { movieKey } from './api-keys';

@Injectable()
export class MovieApiService {

  constructor(private http: Http) { }

  getMovie(title: string) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+movieKey+"&language=en-US&query="+title+"&page=1&include_adult=false")
  }
}
