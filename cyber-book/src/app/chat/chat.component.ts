import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../chat.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  chats: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.chats = this.chatService.getChats();
  }

  submitForm(alias: string,title: string) {
    var newChat: Chat = new Chat(alias, title);
    this.chatService.addChat(newChat);
  }

}
