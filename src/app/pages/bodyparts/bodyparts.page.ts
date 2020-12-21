import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { BodypartsObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-bodyparts',
  templateUrl: './bodyparts.page.html',
  styleUrls: ['./bodyparts.page.scss'],
})
export class BodypartsPage implements OnInit {

  public strings = strings;
  bodyparts: BodypartsObject[] = [];
  isLoading = false;
  height: any;

  constructor(
    private DataService: DataService,
    public plt: Platform
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.height = this.plt.height() / 4.4 + 'px';

    this.DataService.getDataBodyparts()
    .subscribe( resp => {
      this.bodyparts = resp;

      if ( this.bodyparts.length === 0 ) {

        this.height = '157.273px';

      } else if ( this.bodyparts.length === 3 || this.bodyparts.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.bodyparts.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }
    
      this.isLoading = false;

  } );

  }

}
