import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TagsObject } from '../../interfaces/interfaces';
import { strings } from '../../config/strings';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {

  public strings = strings;
  tags: TagsObject[] = [];
  isLoading = false;

  constructor(
    private dataService: DataService,
    public admob: AdmobService
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.dataService.getDataTags()
    .subscribe( resp => {
      this.tags = resp;
      this.isLoading = false;

  } );

    this.admob.BannerAd();
}

// tslint:disable-next-line: use-lifecycle-interface
ngOnDestroy() {
  this.admob.HideBannerAd();
}

}
