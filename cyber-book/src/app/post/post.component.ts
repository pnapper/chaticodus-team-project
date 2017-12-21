import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() childUser;
  @Output() ClosePost = new EventEmitter();

  constructor(private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
  }
  submitForm(username: string, status: string) {
    var newPost: Posts = new Posts(username, "normal", status, [], Date.now());
    this.feedService.addPost(newPost);
  }
}
