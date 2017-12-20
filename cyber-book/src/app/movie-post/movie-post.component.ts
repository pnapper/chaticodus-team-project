import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrls: ['./movie-post.component.css'],
  providers: [ MovieApiService ]
})
export class MoviePostComponent implements OnInit {

  movies: any[]=null;
  noMovies: boolean=false;
  constructor(private MovieService: MovieApiService) { }
  movieForm(title: string) {
    this.noMovies = false;
    this.MovieService.getMovie(title).subscribe(response => {
      if(response.json().results.length > 0)
        {
          this.movies = response.json();
        }
      else {
          this.noMovies = true;
        }
    });
  }

  ngOnInit() {
  }

}
