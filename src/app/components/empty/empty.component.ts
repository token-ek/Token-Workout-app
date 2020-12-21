import { Component, OnInit, Input } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent implements OnInit {

  public strings = strings;

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
