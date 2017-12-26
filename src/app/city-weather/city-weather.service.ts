import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CityWeatherService {
  constructor(private http: Http) {
  }

  getWeatherDetails(cityName: string) {
    return this.http.get(environment.apiUrl + 'weather?q=' + cityName + '&APPID=' + environment.apiKey);
  }
}
