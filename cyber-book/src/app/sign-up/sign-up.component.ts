import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private router: Router, private afAuth: AngularFireAuth, private af: AngularFireDatabase) {
    this.user = this.afAuth.authState
  }

  ngOnInit() {
  }

  createUser(event) {
    event.preventDefault();
    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    console.log(userName, password);

    this.afAuth.auth.createUserWithEmailAndPassword(userName, password).catch(function(error) {
      console.log(error.message);
    });
    this.router.navigate(['']);
  }

}
