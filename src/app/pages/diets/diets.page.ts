import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { DietsObject, CategoriesObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  public strings = strings;
  diets: DietsObject[] = [];
  categories: CategoriesObject[] = [];
  isLoading = false;
  isReady = true;

  slideOpts = {
    slidesPerView: 1,
    freeMode: false
  };

  constructor(private DataService: DataService) { }

  ngOnInit() {

    this.isLoading = true;

    this.DataService.getDataFeaturedDiets()
    .subscribe( resp => {
      this.diets = resp;
      this.isReady = true;


  });

    this.DataService.getDataCategories()
  .subscribe( resp => {
    this.categories = resp;
    this.isLoading = false;


});

  }

}
