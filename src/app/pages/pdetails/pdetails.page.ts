import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import { strings } from '../../config/strings';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { PostcommentsComponent } from '../../components/postcomments/postcomments.component';
import { AddcommentComponent } from '../../components/addcomment/addcomment.component';
import { FavoriteService } from '../../services/favorite.service';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.page.html',
  styleUrls: ['./pdetails.page.scss'],
})
export class PdetailsPage implements OnInit {

  public strings = strings;
  post: any = {};
  isLoading = false;
  rating = 0;
  count = 0;
  postcomments: any = [];
  id: any;
  innerHeight: any;
  icon = 'star-outline';

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private modalCtrl: ModalController,
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

    async ionViewWillEnter() {
      this.isLoading = true;
      this.innerHeight = this.plt.height() / 3 + 'px';
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          this.dataFavorite.existPost(this.id)
          .then( exist => this.icon = ( exist ) ? 'star' : 'star-outline');

          const commentsRef = firebase.database().ref(`postComments/${this.id}`);

          commentsRef.on('child_added', snapshot => {
            commentsRef.on('value', snap => {
            const comments = [];
            snap.forEach(row => {
            comments.push(Number(row.val().rating));
            });

            this.rating = comments.reduce((previous, current) => previous + current, 0) / comments.length;
            this.count = comments.length;

      });
      });

          if (!this.id) {
            this.goBack();
          }
        }
      );

    }

    goBack() {
      this.router.navigate(['/home']);
    }

    async showComments( id: string) {

      const modal = await this.modalCtrl.create({
         component: PostcommentsComponent,
         componentProps: {
          id
        }
       });

      modal.present();

     }

     async addComment( id: string) {

      const modal = await this.modalCtrl.create({
         component: AddcommentComponent,
         componentProps: {
          id
        }
       });

      modal.present();

     }


    getDetails() {

    this.dataService.getDataPostById(this.id)
    .subscribe( resp => {

      this.post = resp[0];
      this.isLoading = false;

  } );
}

addToFavorites() {
  const post = {
    id: this.post.post_id,
    title: this.post.post_title,
    image: this.post.post_image,
};

  const exist = this.dataFavorite.savePost( post );
  this.icon = ( exist ) ? 'star' : 'star-outline';
}

}
