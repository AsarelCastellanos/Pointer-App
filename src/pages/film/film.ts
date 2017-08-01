import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  public events;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.downloadEvents();
  }
  downloadEvents(){
    this.events = null;

    this.http.get('https://miligate.herokuapp.com/pullFilm').map(res => res.json()).subscribe(data=> {
      this.events = data;
      console.log(this.events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  gotoInfoPage(e){
    this.navCtrl.push(InfoPage,{
      data: e
    })
  }

}
