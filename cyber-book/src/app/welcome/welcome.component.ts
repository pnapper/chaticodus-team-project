import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  userId;
  realuser;
  searchMusicShow: boolean = false;
  searchMovieShow: boolean = false;


  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
    this.afAuth.auth.onAuthStateChanged((myUser) => {
      if(myUser){
        this.realuser = this.afAuth.auth.currentUser;
        this.userId = this.realuser.email;
      }
    })

  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].value;

    this.afAuth.auth.signInWithEmailAndPassword(userName, password).then(() => {
      this.realuser = this.afAuth.auth.currentUser;
      if (this.realuser) {
        this.userId = this.realuser.email;
      }
    }).catch(function(error) {
      console.log(error.message);
    });

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
      this.userId = '';
      this.realuser = null;
  }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }

  showMusic(){
    this.searchMusicShow = true;
    this.searchMovieShow = false;
  }

  showMovie(){
    this.searchMovieShow = true;
    this.searchMusicShow = false;
  }

  CloseMovieSender(value: boolean){
    this.searchMovieShow = value;
  }

  CloseMusicSender(value: boolean){
    this.searchMusicShow = value;
  }


}
