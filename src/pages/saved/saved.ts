import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing : SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedPage');
  }
  
  regularShare() {
    this.socialSharing.share('Sharing.', null, "https://espngrantland.files.wordpress.com/2014/09/drake_vs_lil_wayne_concert-e1411499640552.jpg?w=2048", null);
  }

  gotoInfoPage(){
    this.navCtrl.push(InfoPage)
  }
}