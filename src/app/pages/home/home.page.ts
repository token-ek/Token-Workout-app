import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public menuCtrl: MenuController) {}

  public strings = strings;

  public innerHeight: any;

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'customMenu');
   }

  ngOnInit() {
    this.innerHeight = window.innerHeight / 3 + 'px';
  }

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }

}
