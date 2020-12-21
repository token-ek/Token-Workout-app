import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-workoutsfav',
  templateUrl: './workoutsfav.component.html',
  styleUrls: ['./workoutsfav.component.scss'],
})
export class WorkoutsfavComponent implements OnInit {

  workouts: any = [];
  public strings = strings;

  constructor( private dataFavorites: FavoriteService) { }

  async ngOnInit() {

    this.workouts = await this.dataFavorites.loadWorkouts();

  }

  async removeFromFavorites(id) {

    this.dataFavorites.removeWorkout(id);
    this.workouts = await this.dataFavorites.loadWorkouts();

}

}
