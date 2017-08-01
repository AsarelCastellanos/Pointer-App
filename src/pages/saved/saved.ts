import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InfoPage } from '../info/info';

import 'rxjs/add/operator/map';
import { Http, RequestOptions, URLSearchParams  } from '@angular/http';

@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {
  events:any;
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing : SocialSharing,public http: Http) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('var1', "John Doe");


      this.http.get('https://miligate.herokuapp.com/returnSavedEvents').map(res => res.json()).subscribe(data=> {
        this.user = data;
        this.events = this.user.savedEvents;
        console.log(this.events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedPage');
  }
  
  regularShare() {
    this.socialSharing.share('Sharing.', null, "https://espngrantland.files.wordpress.com/2014/09/drake_vs_lil_wayne_concert-e1411499640552.jpg?w=2048", null);
  }

  gotoInfoPage(event){
    this.navCtrl.push(InfoPage,{data:event})
  }
}