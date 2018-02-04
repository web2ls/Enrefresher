import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) { 
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

  test() {
    return this.auth.auth.currentUser;
  }

}
