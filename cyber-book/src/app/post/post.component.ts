import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { Posts } from '../posts.model';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [FeedService, UserService]
})
export class PostComponent implements OnInit {

  constructor(private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
  }
  submitForm(username: string, type: string, status: string, response: string) {
    var newPost: Posts = new Posts(username, type, status, [response]);
    this.feedService.addPost(newPost);
  }
}
