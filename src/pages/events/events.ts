import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SavedPage } from '../saved/saved';
import { MusicPage } from '../music/music';
import { FilmPage } from '../film/film';
import { FoodPage } from '../food/food';
import { SportsPage } from '../sports/sports';
import { ArtPage } from '../art/art';
import { ReligiousPage } from '../religious/religious';

import { DataServiceProvider } from "../../providers/data-service/data-service";
import { SplashScreen } from '@ionic-native/splash-screen'
import { Observable } from "rxjs/Observable"; 

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events : Observable <any>;
  constructor(public navCtrl: NavController, public dataService : DataServiceProvider, private splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
  // this.loadEvents();
  }
 public loadEvents() {
   this.events = this.dataService.getEvents();
   console.log(this.events)
   console.log("Hello")
 }

  goToProfile() {
    this.navCtrl.push(ProfilePage)
  }

  goToSavedEvents(){
    this.navCtrl.push(SavedPage)
  }
  
  goToMusic() {
    this.navCtrl.push(MusicPage)
  }
  goToFilm(){
    this.navCtrl.push(FilmPage,)
  }
  
  goToFood(){
    this.navCtrl.push(FoodPage)
  }

  goToSports(){
    this.navCtrl.push(SportsPage)
  }

  goToReligious(){
    this.navCtrl.push(ReligiousPage)
  }

  goToArt(){
    this.navCtrl.push(ArtPage)
  }

    presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: "crescent",
      content: 'Loading events...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000)
  }

}

