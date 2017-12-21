import { Component, OnInit, Input } from '@angular/core';
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

  @Input() childUser;

  chats: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.chats = this.chatService.getChats();
  }

  postMessage(event) {
    event.preventDefault();
    let message = event.target.elements[0].value;
    var newChat: Chat = new Chat(this.childUser, message, Date.now());
    this.chatService.addChat(newChat);
  }

}
