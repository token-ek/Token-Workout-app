import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  privacypolicy: any;
  termsofservice: any;
  isLoading = true;

  constructor(
    private dataService: DataService,
  ) { }

    public strings = strings;

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

}
