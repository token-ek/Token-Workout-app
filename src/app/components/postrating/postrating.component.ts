import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postrating',
  templateUrl: './postrating.component.html',
  styleUrls: ['./postrating.component.scss'],
})
export class PostratingComponent implements OnInit {

@Input() value;
@Input() color: any;
@Input() size: any;


  constructor() {

    }

  ngOnInit() {

  }

}
