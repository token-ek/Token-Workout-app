import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-postsfav',
  templateUrl: './postsfav.component.html',
  styleUrls: ['./postsfav.component.scss'],
})
export class PostsfavComponent implements OnInit {

  posts: any = [];
  public strings = strings;

  constructor( private dataFavorites: FavoriteService) { }

  async ngOnInit() {

    this.posts = await this.dataFavorites.loadPosts();

  }

  async removeFromFavorites(id) {

    this.dataFavorites.removePost(id);
    this.posts = await this.dataFavorites.loadPosts();

}

}
