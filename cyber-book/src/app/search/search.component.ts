import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users.model';
import { Posts } from '../posts.model';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FeedService, UserService]
})
export class SearchComponent implements OnInit {

  @Input() childMusic;
  @Input() childValue;
  type: string;
  responses: string[]

  constructor(private router: Router, private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
  }

  clickedMusicSearch(title: string, name: string){
    this.childValue[0] = false;
    this.childValue[1] = true;
    this.type = "music";
    this.responses = [title, name];
  }

  postMusicSearch(username: string, status: string){
    let musicPost = new Posts(username, this.type, status, this.responses);
    this.feedService.addPost(musicPost);
    this.childValue[0] = true;
    this.childValue[1] = false;
    this.type = "";
    this.responses = [];
  }

}
