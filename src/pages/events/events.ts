import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SavedPage } from '../saved/saved';
import { MusicPage } from '../music/music';
import { FilmPage } from '../film/film';
import { FoodPage } from '../food/food';
import { SportsPage } from '../sports/sports';
import { ArtPage } from '../art/art';
import { ReligiousPage } from '../religious/religious';

import { DataServiceProvider } from "../../providers/data-service/data-service";

import { Observable } from "rxjs/Observable"; 
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events : Observable <any>;
  constructor(public navCtrl: NavController, public dataService : DataServiceProvider ) {
  this.loadEvents();
  }
 public loadEvents() {
   this.events = this.dataService.getEvents();
   console.log(this.events)
 }

  goToProfile() {
    this.navCtrl.push(ProfilePage)
  }

  goToSavedEvents(){
    this.navCtrl.push(SavedPage)
  }
  
  goToMusic() {
    this.navCtrl.push(MusicPage, {name: "events"})
  }
  goToFilm(){
    this.navCtrl.push(FilmPage)
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
}

