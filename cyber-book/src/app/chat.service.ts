import { Injectable } from '@angular/core';
import { Chat } from './chat.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.chats = database.list('chats');
}

  getChats() {
    return this.chats;
  }

  addChat(newChat: Chat) {
    this.chats.push(newChat);
  }
}
