import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { PostsObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public strings = strings;
  posts: PostsObject[] = [];
  recentposts: PostsObject[] = [];
  isLoading = false;
  isReady = true;

  limit = 8;

  slideOpts = {
    slidesPerView: 1,
    freeMode: false
  };

  constructor(private DataService: DataService) { }

  ngOnInit() {


    this.isLoading = true;

    this.DataService.getDataFeaturedPosts()
    .subscribe( resp => {
      this.posts = resp;
      this.isReady = true;

  });

    this.DataService.getDataRecentPosts( this.limit )
  .subscribe( resp => {
    this.recentposts = resp;
    this.isLoading = false;


});

}


}
