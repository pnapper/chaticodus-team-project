import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  users: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.users = database.list('users');

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  saveUserInfoFromForm(uid, name, email) {
    return this.database.object('users/' + uid).set({
      name: name,
      email: email
    });
  }

}
