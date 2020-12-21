import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform, LoadingController, NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { config } from '../../config/config';
import { AnimationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public strings = strings;
  public innerHeight: any;

  validationsform: FormGroup;

  constructor(
    public plt: Platform,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public http: HttpClient
    ) {}

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    };

    ngOnInit() {

      this.innerHeight = this.plt.height() / 2.5 + 'px';

      this.validationsform = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        message: new FormControl('', Validators.compose([
          Validators.required,
        ])),
      });
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

    backButton() {
      const animations: AnimationOptions = {
        animated: true,
        animationDirection: 'back'
      };
      this.navCtrl.back(animations);
    }

    sentMessage(value) {

      const messageData = {
              name: value.name,
              email: value.email,
              message: value.message
      };

      this.http.post(config.Url + '/controller/contactform.php', messageData, this.httpOptions)
        .subscribe(data => {
          if (data === 'false') {
            this.presentAlert(strings.ST32);

          } else {
            this.presentAlert(strings.ST74);
            this.backButton();

          }
         }, error => {
          console.log(error);
        });
    }

/* sentMessage(value) {

      fetch(config.Url + '/controller/contactform.php', {
        method: 'POST',
        headers: {
          // tslint:disable-next-line: object-literal-key-quotes
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          name: value.name,
          email: value.email,
          message: value.message

        })

      }).then((response) => response.json())
            .then((responseJson) => {

              if (responseJson === 'false') {
                this.presentAlert(strings.ST32);

              } else {
                this.presentAlert(strings.ST74);
                this.backButton();

              }

            }).catch((error) => {
              console.log(error);

            });


        } */


}
