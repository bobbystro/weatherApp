import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CitiesListModel} from '../cities-list.model';
import {CitiesListService} from '../cities-list.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.less']
})
export class CitiesListComponent implements OnInit {
  @Input() selectedCity: CitiesListModel;
  @Output() selectedCityChanged: EventEmitter<CitiesListModel> = new EventEmitter<CitiesListModel>();
  citiesList: CitiesListModel[];

  constructor(private citiesListService: CitiesListService) { }

  ngOnInit() {
    this.citiesList = this.citiesListService.getCitiesList();
  }

  onCityClick(city: CitiesListModel) {
    this.selectedCity = city;
    this.selectedCityChanged.emit(city);
  }
}
