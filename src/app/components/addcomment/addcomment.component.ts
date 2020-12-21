import { Component, OnInit, Input } from '@angular/core';
import { strings } from '../../config/strings';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.scss'],
})
export class AddcommentComponent implements OnInit {

  @Input() id;

  public strings = strings;
  validationsform: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.validationsform = this.formBuilder.group({
      rating: new FormControl('', Validators.compose([
        Validators.required
      ])),
      comment: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ])),
    });
  }

tryAddComment(values) {
  const user = firebase.auth().currentUser.displayName;
  const date = new Date().toString();
  const data = {};
  const coment = {comment: values.comment, rating: values.rating, user, date};
  const comentario = Object.assign({}, coment);
  const ref = firebase.database().ref().child('postComments');
  const key = ref.push().key;

  data[`${this.id}/${key}`] = comentario;

  ref.update(data).then(() => {

    this.modalCtrl.dismiss();

   });

}


  close() {
    this.modalCtrl.dismiss();
  }

}
