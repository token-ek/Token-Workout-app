import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { QuotesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  public strings = strings;
  quotes: QuotesObject[] = [];
  isLoading = false;

  slideOpts = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    freeMode: false
  };

  constructor(
    private DataService: DataService
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.DataService.getDataMotivation()
    .subscribe( resp => {
      this.quotes = resp;
      this.isLoading = false;

  } );

  }

/*   async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: 'crescent',
      mode: 'ios'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  } */


}
