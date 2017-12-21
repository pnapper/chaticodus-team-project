import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users.model';
import { Posts } from '../posts.model';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService, UserService]
})
export class FeedComponent implements OnInit {

  posts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
    this.posts = this.feedService.getPosts();
  }

}
