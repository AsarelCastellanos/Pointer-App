import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtPage');
  }

  gotoInfoPage(){
    this.navCtrl.push(InfoPage)
  }

}
