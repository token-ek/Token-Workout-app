import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-bmiinfo',
  templateUrl: './bmiinfo.page.html',
  styleUrls: ['./bmiinfo.page.scss'],
})
export class BmiinfoPage implements OnInit {

  public strings = strings;

  data = [
    {
      text: strings.ST117,
      number: strings.ST123,
      color: '#dff9fb'
    },
    {
      text: strings.ST118,
      number: strings.ST124,
      color: '#badc58'
    },
    {
      text: strings.ST119,
      number: strings.ST125,
      color: '#f6e58d'
    },
    {
      text: strings.ST120,
      number: strings.ST126,
      color: '#ffbe76'
    },
    {
      text: strings.ST121,
      number: strings.ST127,
      color: '#ff7979'
    },
    {
      text: strings.ST122,
      number: strings.ST128,
      color: '#eb4d4b'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
