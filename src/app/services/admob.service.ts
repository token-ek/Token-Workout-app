import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  // Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true,
    autoShow: false,
    id: 'ca-app-pub-3940256099942544/1033173712'
  };


  constructor( private admobFree: AdMobFree, public platform: Platform ) { }

  InterstitialAd() {
    this.admobFree.interstitial.isReady().then(() => {
      this.admobFree.interstitial.show();
    });
  }

  BannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true,
      autoShow: true,
      id: config.BannerId
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare();
  }

  HideBannerAd() {
    this.admobFree.banner.hide();
  }

}
