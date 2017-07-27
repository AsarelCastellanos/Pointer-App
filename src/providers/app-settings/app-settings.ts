import { Injectable } from '@angular/core';

const settings = {
  url: "https://miligate.herokuapp.com/",
}

@Injectable()
export class AppSettingsProvider {

  constructor() {}
  public getUrl(){
    return settings.url;
  }

}
