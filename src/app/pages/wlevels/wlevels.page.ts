import { Component, OnInit } from '@angular/core';
import { WorkoutsObject } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-wlevels',
  templateUrl: './wlevels.page.html',
  styleUrls: ['./wlevels.page.scss'],
})
export class WlevelsPage implements OnInit {

  public strings = strings;
  workouts: WorkoutsObject[] = [];
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
          this.getWorkouts();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getWorkouts() {

    this.dataService.getDataWorkoutsByLevel(this.id)
    .subscribe( resp => {

      this.workouts = resp;

      if ( this.workouts.length === 1 ) {

        this.height = '167.273px';

      } else if ( this.workouts.length === 3 || this.workouts.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.workouts.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }

      this.isLoading = false;

  } );
}

}
