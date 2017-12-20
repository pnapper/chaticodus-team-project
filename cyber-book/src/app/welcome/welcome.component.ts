import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
        console.log('logged in');
        console.log(this.realuser);

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


}
