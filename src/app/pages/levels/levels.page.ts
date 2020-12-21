import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { LevelsObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  public strings = strings;
  levels: LevelsObject[] = [];
  isLoading = false;
  height: any;

  constructor(
    private router: Router,
    private DataService: DataService,
    public plt: Platform
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.height = this.plt.height() / 4.4 + 'px';

    this.DataService.getDataLevels()
    .subscribe( resp => {
      this.levels = resp;

      if ( this.levels.length === 0 ) {

        this.height = '167.px';

      } else if ( this.levels.length === 3 || this.levels.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.levels.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }

      this.isLoading = false;

  } );

  }

}
