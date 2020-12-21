import { Component, OnInit, Input } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-restday',
  templateUrl: './restday.component.html',
  styleUrls: ['./restday.component.scss'],
})
export class RestdayComponent implements OnInit {

  public strings = strings;

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
