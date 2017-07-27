import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  gotoInfoPage(){
    this.navCtrl.push(InfoPage)
  }

}
