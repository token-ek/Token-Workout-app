import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss'],
})
export class BackbuttonComponent implements OnInit {

  @Input() color;

  constructor(private navCtrl: NavController) { }
  
  ngOnInit() {}

  backButton() {
    const animations: AnimationOptions = {
      animated: true,
      animationDirection: 'back'
    };
    this.navCtrl.back(animations);
  }

}
