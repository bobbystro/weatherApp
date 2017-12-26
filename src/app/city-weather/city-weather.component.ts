import {Component, OnInit} from '@angular/core';
import {CityWeatherService} from './city-weather.service';
import {CityWeatherModel} from './city-weather.model';
import {ActivatedRoute, Params} from '@angular/router';
import {tempConsts} from '../constants/temp-consts';
import {httpResponseConsts} from '../constants/http-response-consts';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.less']
})
export class CityWeatherComponent implements OnInit {
  cityName = '';
  tempCityName = '';
  cityWeather: CityWeatherModel;

  constructor(private cityWeatherService: CityWeatherService,
              private route: ActivatedRoute) {
    this.cityWeather = new CityWeatherModel();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.cityName = params['cityName'];
          this.cityWeatherService.getWeatherDetails(this.cityName).subscribe(
            data => {
              const jsonData = data.json();
              this.cityWeather = new CityWeatherModel(jsonData['weather'][0]['description'],
                'http://openweathermap.org/img/w/' + jsonData['weather'][0]['icon'] + '.png',
                jsonData['main']['temp'],
                jsonData['main']['temp_min'],
                jsonData['main']['temp_max'],
                jsonData['main']['pressure'],
                jsonData['visibility'],
                jsonData['wind']['speed'],
                jsonData['name'],
                jsonData['sys']['country']);
            }, error => {
              console.log(error);
            }
          );
        }
      );
  }

  getCityName() {

    this.cityWeather = new CityWeatherModel();
    this.cityWeatherService.getWeatherDetails(this.tempCityName).subscribe(
      data => {
        const jsonData = data.json();
        this.cityName = this.tempCityName;
        this.cityWeather = new CityWeatherModel(jsonData['weather'][0]['description'],
          'http://openweathermap.org/img/w/' + jsonData['weather'][0]['icon'] + '.png',
          jsonData['main']['temp'],
          jsonData['main']['temp_min'],
          jsonData['main']['temp_max'],
          jsonData['main']['pressure'],
          jsonData['visibility'],
          jsonData['wind']['speed'],
          jsonData['name'],
          jsonData['sys']['country']);
      }, error => {
        if (error.status === httpResponseConsts.notFound) {
          alert('City not found');
        }
      }
    );
  }

  convertToCelsius(temp): number {
    return temp - tempConsts.toCelsiusConvertNumber;
  }
}
