import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public strings = strings;
  aboutus: any;
  isLoading = true;

  constructor(private DataService: DataService) { }

  ngOnInit() {

    this.isLoading = true;

    this.DataService.getDataStrings()
    .subscribe( resp => {
      const data = resp[0];
      this.aboutus = data.st_aboutus;
      this.isLoading = false;

  } );

  }

}
