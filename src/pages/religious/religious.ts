import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-religious',
  templateUrl: 'religious.html',
})
export class ReligiousPage {
    public events;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(navParams.data.name);
    this.downloadEvents();
  }
  downloadEvents(){
    this.events = null;

    this.http.get('https://miligate.herokuapp.com/pullReligious').map(res => res.json()).subscribe(data=> {
      this.events = data;
      console.log(this.events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReligiousPage');
  }

  gotoInfoPage(e){

    this.navCtrl.push(InfoPage,{
      data: e
    })
    }

}
