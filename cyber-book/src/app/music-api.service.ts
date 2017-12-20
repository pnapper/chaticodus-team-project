import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { musicKey } from './api-keys';


@Injectable()
export class MusicApiService {

  constructor(private http: Http) { }

  getMusic(title: string) {
    return this.http.get("http://api.musicgraph.com/api/v2/track/suggest?api_key="+musicKey+"&prefix="+title+"&limit=3")
  }
}
