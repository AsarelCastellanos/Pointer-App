import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from "@angular/http";
//All Pages
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { SavedPage } from '../pages/saved/saved';
import { InfoPage } from '../pages/info/info';
import { EventsPage } from '../pages/events/events';
import { MusicPage } from '../pages/music/music';
import { FilmPage } from '../pages/film/film';
import { FoodPage } from '../pages/food/food';
import { SportsPage} from '../pages/sports/sports';
import { ReligiousPage } from '../pages/religious/religious';
import { ArtPage } from '../pages/art/art';


@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    MusicPage,
    FilmPage,
    FoodPage,
    SportsPage,
    ReligiousPage,
    ArtPage,
    InfoPage,
    ProfilePage,
    SavedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    MusicPage,
    FilmPage,
    FoodPage,
    SportsPage,
    ReligiousPage,
    ArtPage,
    InfoPage,
    ProfilePage,
    SavedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    DataServiceProvider
  ]
})
export class AppModule {}
