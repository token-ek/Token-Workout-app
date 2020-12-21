import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  public strings = strings;

  constructor() { }

  ngOnInit() {
  }

}
