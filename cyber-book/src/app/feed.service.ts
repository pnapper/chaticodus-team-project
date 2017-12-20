import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Posts } from './posts.model';

@Injectable()
export class FeedService {

  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
}
    getPosts(){
      return this.posts;
    }

  addPost(newPost: Posts) {
    this.posts.push(newPost);
  }

  addMusicPost(){
    
  }

}
