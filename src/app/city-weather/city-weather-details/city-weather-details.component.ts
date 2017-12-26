import {Component, Input, OnInit} from '@angular/core';
import {CityWeatherModel} from '../city-weather.model';
import {tempConsts} from '../../constants/temp-consts';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.less']
})
export class CityWeatherDetailsComponent implements OnInit {
  @Input() weather: CityWeatherModel;

  constructor() { }

  ngOnInit() {
  }

  convertToCelsius(temp): number {
    return temp - tempConsts.toCelsiusConvertNumber;
  }
}
