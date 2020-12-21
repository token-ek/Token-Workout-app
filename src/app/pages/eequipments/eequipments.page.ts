import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { EquipmentObject } from '../../interfaces/interfaces';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-eequipments',
  templateUrl: './eequipments.page.html',
  styleUrls: ['./eequipments.page.scss'],
})
export class EequipmentsPage implements OnInit {

  public strings = strings;
  exercises: EquipmentObject[] = [];
  title: string;
  isLoading = false;
  id: any;
  height: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
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
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.title = data.title;
          this.getExercises();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getExercises() {

    this.dataService.getDataExercisesByEquipment(this.id)
    .subscribe( resp => {

      this.exercises = resp;

      this.isLoading = false;

  } );
}

}
