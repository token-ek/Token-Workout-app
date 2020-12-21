import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { ExercisesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-weday',
  templateUrl: './weday.page.html',
  styleUrls: ['./weday.page.scss'],
})
export class WedayPage implements OnInit {

  public strings = strings;
  exercises: ExercisesObject[] = [];
  day: any;
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
          this.day = data.day;

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

    this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
    .subscribe( resp => {

      this.exercises = resp;

      this.isLoading = false;

  } );
}

}
