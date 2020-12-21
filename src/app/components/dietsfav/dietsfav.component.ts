import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-dietsfav',
  templateUrl: './dietsfav.component.html',
  styleUrls: ['./dietsfav.component.scss'],
})
export class DietsfavComponent implements OnInit {

  diets: any = [];
  public strings = strings;

  constructor( private dataFavorites: FavoriteService) { }

  async ngOnInit() {

    this.diets = await this.dataFavorites.loadDiets();

  }

  async removeFromFavorites(id) {

    this.dataFavorites.removeDiet(id);
    this.diets = await this.dataFavorites.loadDiets();

}

}
