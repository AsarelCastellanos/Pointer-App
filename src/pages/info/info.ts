import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  title; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, public alertCtrl: AlertController) {
    this.title = navParams.data.data;
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  regularShare(){
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "../assets/img/asaprocky.jpg", null); 
  }

  saveEvent(){
    let alert = this.alertCtrl.create({
      title: 'Event Saved!',
      subTitle: 'You can now view in saved events.',
      buttons: ['OK']
    });
    alert.present();
  }

}
