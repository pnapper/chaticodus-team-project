import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users.model';
import { Posts } from '../posts.model';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
  providers: [FeedService, UserService]
})
export class SearchMovieComponent implements OnInit {

  @Input() childMovie;
  @Input() childValue;
  @Input() childUser;
  @Output() CloseMovie = new EventEmitter();
  type: string = "movie";
  responses: string[];
  CloseMovieValue: boolean = false;

  constructor(private router: Router, private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
  }

  clickedMovieSearch(title: string){
    this.childValue[0] = false;
    this.childValue[1] = true;
    this.responses = [title];
  }

  postMovieSearch(username: string, status: string){
    let moviePost = new Posts(username, this.type, status, this.responses);
    this.feedService.addPost(moviePost);
    this.childValue[1] = false;
    this.responses = [];
  }

  clickCloseMovie(){
    this.CloseMovie.emit(this.CloseMovieValue);
  }
}
