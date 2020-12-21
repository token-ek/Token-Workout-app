import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { config } from '../../config/config';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  public strings = strings;
  public config = config;

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {
  }

  openUrl(url) {
    this.iab.create( url, '_system' );
  }

}
