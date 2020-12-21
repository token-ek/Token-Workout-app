import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, IonSlides } from '@ionic/angular';
import { strings } from '../../config/strings';
import { FavoriteService } from '../../services/favorite.service';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.page.html',
  styleUrls: ['./ddetails.page.scss'],
})
export class DdetailsPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  public strings = strings;
  diet: any = {};
  isLoading = false;
  id: any;
  innerHeight: any;
  icon = 'star-outline';

  slideOpts = {
    slidesPerView: 1,
    freeMode: false
  };

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private dataFavorite: FavoriteService,
    public admob: AdmobService
    ) {}

    ngOnInit() {
      this.admob.BannerAd();
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
      this.admob.HideBannerAd();
    }

    async segmentChanged(ev: any) {
      await this.slider.slideTo(this.segment);
    }
    async slideChanged() {
      this.segment = await this.slider.getActiveIndex();
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.innerHeight = this.plt.height() / 3 + 'px';
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          this.dataFavorite.existDiet(this.id)
          .then( exist => this.icon = ( exist ) ? 'star' : 'star-outline');

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getDetails() {

    this.dataService.getDataDietById(this.id)
    .subscribe( resp => {

      this.diet = resp[0];
      this.isLoading = false;

  } );
}

addToFavorites() {
  const diet = {
    id: this.diet.diet_id,
    title: this.diet.diet_title,
    image: this.diet.diet_image,
};

  const exist = this.dataFavorite.saveDiet( diet );
  this.icon = ( exist ) ? 'star' : 'star-outline';
}

}
