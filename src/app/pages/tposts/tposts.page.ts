import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostsObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tposts',
  templateUrl: './tposts.page.html',
  styleUrls: ['./tposts.page.scss'],
})
export class TpostsPage implements OnInit {

  public strings = strings;
  posts: PostsObject[] = [];
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
          this.getPosts();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getPosts() {

    this.dataService.getDataPostsByTag(this.id)
    .subscribe( resp => {

      this.posts = resp;

      if ( this.posts.length === 1 ) {

        this.height = '167.273px';

      } else if ( this.posts.length === 3 || this.posts.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.posts.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }

      this.isLoading = false;

  } );
}

}
