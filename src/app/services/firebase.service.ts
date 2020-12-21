import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  unsubscribeOnLogOut() {
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  getDisplayName() {
    const user = firebase.auth().currentUser;
    if ( user != null) {
      return user.displayName;
    }
  }

  getCreationTime() {
    const user = firebase.auth().currentUser;
    if ( user != null) {
      return user.metadata.creationTime;
    }
  }

}
