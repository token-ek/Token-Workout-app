import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HtmlComponent implements OnInit {

  @Input() htmlcontent: any;

  constructor() { }

  ngOnInit() {}

}
