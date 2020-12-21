import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-termsguest',
  templateUrl: './termsguest.page.html',
  styleUrls: ['./termsguest.page.scss'],
})
export class TermsguestPage implements OnInit {

  privacypolicy: any;
  termsofservice: any;
  isLoading = true;

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService,
  ) { }

    // tslint:disable-next-line: variable-name
    private _strings = strings;
    public get strings() {
      return this._strings;
    }

    ngOnInit() {

      this.isLoading = true;

      this.dataService.getDataStrings()
      .subscribe( resp => {
        const data = resp[0];
        this.privacypolicy = data.st_privacypolicy;
        this.termsofservice = data.st_termsofservice;
        this.isLoading = false;

    } );

    }


  goClosePage() {
    this.modalCtrl.dismiss();
  }

}
