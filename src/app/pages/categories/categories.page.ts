import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { CategoriesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public strings = strings;
  categories: CategoriesObject[] = [];
  isLoading = false;
  height: any;

  constructor(
    private DataService: DataService,
    public plt: Platform
    ) {}

  ngOnInit() {

    this.isLoading = true;

    this.DataService.getDataCategories()
    .subscribe( resp => {
      this.categories = resp;

      if ( this.categories.length === 0 ) {

        this.height = '125.03px';

      } else if ( this.categories.length === 3 || this.categories.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.categories.length >= 4 ) {
        this.height = this.plt.height() / 5.45 + 'px';

      }

      this.isLoading = false;

  } );

  }

}
