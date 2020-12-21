import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public strings = strings;
  public name: string;
  public since: string;
  public innerHeight: any;
  isLoading = true;
  isWorkouts = false;
  isPosts = false;
  isDiets = false;

  constructor(public plt: Platform, private firebase: FirebaseService) {

}

  ngOnInit() {}

  async ionViewWillEnter() {

    this.isLoading = true;

    this.name = await this.firebase.getDisplayName();

    this.since = await this.firebase.getCreationTime();

    this.innerHeight = this.plt.height() / 3 + 'px';

    this.isLoading = false;
  }

  toggleWorkouts() {
    this.isWorkouts = !this.isWorkouts;
  }

  togglePosts() {
    this.isPosts = !this.isPosts;
  }

  toggleDiets() {
    this.isDiets = !this.isDiets;
  }


}
