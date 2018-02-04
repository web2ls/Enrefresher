import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  currentUser: firebase.User;

  constructor(private auth: AngularFireAuth) { 
    this.auth.authState.subscribe(user => {
      if (user) this.currentUser = user;
    })
  }

  login(creds) {
    return this.auth.auth.signInWithEmailAndPassword(creds.username, creds.password);
  }

  getCurrentUser() {
    return this.auth.authState;
  }

  logout() {
    localStorage.removeItem('authUser');
    return this.auth.auth.signOut();
  }

  getCurrentUserId() {
    return this.auth.auth.currentUser.uid;
  }

}
