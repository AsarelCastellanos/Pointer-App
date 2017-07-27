import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  gotoInfoPage(){
    this.navCtrl.push(InfoPage)
  }

}
