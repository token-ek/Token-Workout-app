import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  public strings = strings;

  constructor() { }

  ngOnInit() {

  }

}
