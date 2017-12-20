import { Component, OnInit } from '@angular/core';
import { MusicApiService } from '../music-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music-post',
  templateUrl: './music-post.component.html',
  styleUrls: ['./music-post.component.css'],
  providers: [ MusicApiService ]
})
export class MusicPostComponent implements OnInit {

  musics: any[]=null;
  values: any[]=[true,false];
  noMusic: boolean=false;
  constructor(private MusicService: MusicApiService) { }
  musicForm(title: string) {
    this.noMusic = false;
    this.values = [true,false];
    this.MusicService.getMusic(title).subscribe(response => {
      if(response.json().data.length > 0)
        {
          this.musics = response.json();
        }
          else {
          this.noMusic = true;
        }
    });
  }

  ngOnInit() {
  }

}
