import { Component, OnInit } from '@angular/core';
import {CitiesListModel} from './cities-list.model';

@Component({
  selector: 'app-cities-site',
  templateUrl: './cities-site.component.html',
  styleUrls: ['./cities-site.component.less']
})
export class CitiesSiteComponent implements OnInit {
  selectedCity: CitiesListModel;


  constructor() {
    this.selectedCity = new CitiesListModel('City', 'Country');
  }

  ngOnInit() {
  }

  onCityChanged(event) {
    this.selectedCity = event;
  }

}
