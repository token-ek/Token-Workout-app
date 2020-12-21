import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login.page';
import { strings } from '../../config/strings';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private authService: AuthService,
    public navCtrl: NavController,
    private router: Router,
    public modalCtrl: ModalController,
    public loadingController: LoadingController

    ) { }

    // tslint:disable-next-line: variable-name
    private _strings = strings;
    public get strings() {
      return this._strings;
    }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   ngOnInit() {

  }

  async goLoginPage() {

    const modal = await this.modalCtrl.create({
       component: LoginPage,
     });

    modal.present();

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


  async goSignUpPage() {

    const modal = await this.modalCtrl.create({
       component: SignupPage,
     });

    modal.present();

   }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then((res) => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      if (err === 'auth/wrong-password') {
        this.presentAlert(strings.ST30);
      } else if (err === 'auth/user-not-found') {
        this.presentAlert(strings.ST31);
      } else {
        this.presentAlert(strings.ST32);
      }
    });
  }

}
