import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { strings } from '../../config/strings';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.scss'],
})
export class PostcommentsComponent implements OnInit {

  public strings = strings;
  @Input() id;
  postcomments = [];
  isLoading = false;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async ionViewWillEnter() {

    this.isLoading = true;

    firebase.database().ref(`postComments/${this.id}`).on('value', snapshot => {
      const comments = [];
      snapshot.forEach(row => {
      comments.push({
      id: row.key,
      rating: row.val().rating,
      comment: row.val().comment,
      user: row.val().user

              });
      });

      this.postcomments = comments;
      this.isLoading = false;


      });
}


  close() {
    this.modalCtrl.dismiss();
  }

}
