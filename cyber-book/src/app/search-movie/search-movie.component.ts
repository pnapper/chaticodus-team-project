import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users.model';
import { Posts } from '../posts.model';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
  providers: [ FeedService, UserService ]
})
export class SearchMovieComponent implements OnInit {

  @Input() childMovie;
  searchValue: boolean = true;
  resultValue: boolean = false;
  type: string;
  responses: string[]

  constructor(private router: Router, private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
  }

  clickedMovieSearch(title: string){
    this.searchValue = false;
    this.resultValue = true;
    this.type = "movie";
    this.responses = [title]
  }

  postMovieSearch(username: string){
    let moviePost = new Posts(username, this.type, status, this.responses);
    this.feedService.addPost(moviePost);
    this.searchValue = true;
    this.resultValue = false;
    this.type = "";
    this.responses = [];
  }

}
