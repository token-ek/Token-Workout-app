import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavController, MenuController, ModalController, LoadingController } from '@ionic/angular';
import { strings } from '../../config/strings';
import * as firebase from 'firebase/app';
import { TermsguestPage } from '../termsguest/termsguest.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationsform: FormGroup;

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public loadingController: LoadingController
  ) { }

  // tslint:disable-next-line: variable-name
  private _strings = strings;
  public get strings() {
    return this._strings;
  }

  ngOnInit() {
    this.validationsform = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      firebase.auth().currentUser.updateProfile({
        displayName : value.name,
    });
      this.modalCtrl.dismiss();
      this.router.navigate(['/home']);
    }, err => {
      if (err.code === 'auth/email-already-in-use') {
        this.presentAlert(strings.ST36);
      } else {
        this.presentAlert(strings.ST32);
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   async presentAlert(value) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: value,
      mode: 'ios'
    });
    await loading.present();
  }

  goClosePage() {
    this.modalCtrl.dismiss();
  }

  async goTermsPage() {

    const modal = await this.modalCtrl.create({
       component: TermsguestPage,
     });

    modal.present();

   }

}
