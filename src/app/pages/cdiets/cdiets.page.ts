import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { DietsObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cdiets',
  templateUrl: './cdiets.page.html',
  styleUrls: ['./cdiets.page.scss'],
})
export class CdietsPage implements OnInit {

  public strings = strings;
  diets: DietsObject[] = [];
  title: string;
  isLoading = false;
  id: any;
  height: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform
    ) {}

    ngOnInit() {

    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.title = data.title;
          this.getDiets();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

    getDiets() {

    this.dataService.getDataDietsByCategory(this.id)
    .subscribe( resp => {

      this.diets = resp;

      if ( this.diets.length === 1 ) {

        this.height = '167.273px';

      } else if ( this.diets.length === 3 || this.diets.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.diets.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }

      this.isLoading = false;

  } );
}

}
