import {Injectable} from '@angular/core';
import {CitiesListModel} from './cities-list.model';

@Injectable()
export class CitiesListService {
  private citiesList: CitiesListModel[] = [
    new CitiesListModel('Tirana', 'Albania'),
    new CitiesListModel('Andorra la Vella', 'Andorra'),
    new CitiesListModel('Yerevan', 'Armenia'),
    new CitiesListModel('Vienna', 'Austria'),
    new CitiesListModel('Baku', 'Azerbaijan'),
    new CitiesListModel('Minsk', 'Belarus'),
    new CitiesListModel('Brussels', 'Belgium'),
    new CitiesListModel('Sarajevo', 'Bosnia and Herzegovina'),
    new CitiesListModel('Sofia', 'Bulgaria'),
    new CitiesListModel('Zagreb', 'Croatia'),
    new CitiesListModel('Nicosia', 'Cyprus'),
    new CitiesListModel('Prague', 'Czech Republic'),
    new CitiesListModel('Copenhagen', 'Denmark'),
    new CitiesListModel('Tallinn', 'Estonia'),
    new CitiesListModel('Helsinki', 'Finland'),
    new CitiesListModel('Paris', 'France'),
    new CitiesListModel('Tbilisi', 'Georgia'),
    new CitiesListModel('Berlin', 'Germany'),
    new CitiesListModel('Athens', 'Greece'),
    new CitiesListModel('Budapest', 'Hungary'),
    new CitiesListModel('eykjavik', 'RIceland'),
    new CitiesListModel('Dublin', 'Ireland'),
    new CitiesListModel('Rome', 'Italy'),
    new CitiesListModel('Astana', 'Kazakhstan'),
    new CitiesListModel('Pristina', 'Kosovo'),
    new CitiesListModel('Riga', 'Latvia'),
    new CitiesListModel('Vilnius', 'Lithuania'),
    new CitiesListModel('Luxembourg', 'Luxembourg'),
    new CitiesListModel('Skopje', 'Macedonia'),
    new CitiesListModel('Valletta', 'Malta'),
    new CitiesListModel('Chisinau', 'Moldova'),
    new CitiesListModel('Monaco', 'Monaco'),
    new CitiesListModel('Podgorica', 'Montenegro'),
    new CitiesListModel('Amsterdam', 'Netherlands'),
    new CitiesListModel('Oslo', 'Norway'),
    new CitiesListModel('Warsaw', 'Poland'),
    new CitiesListModel('Lisbon', 'Portugal'),
    new CitiesListModel('Bucharest', 'Romania'),
    new CitiesListModel('Moscow', 'Russia'),
    new CitiesListModel('San Marino', 'San Marino'),
    new CitiesListModel('Belgrade', 'Serbia'),
    new CitiesListModel('Bratislava', 'Slovakia'),
    new CitiesListModel('Ljubljana', 'Slovenia'),
    new CitiesListModel('Madrid', 'Spain'),
    new CitiesListModel('Stockholm', 'Sweden'),
    new CitiesListModel('Bern', 'Switzerland'),
    new CitiesListModel('Ankara', 'Turkey'),
    new CitiesListModel('Kyiv', 'Ukraine'),
    new CitiesListModel('London', 'United Kingdom'),
    new CitiesListModel('Vatican City', 'Vatican City')
  ];

  getCitiesList() {
    return this.citiesList;
  }
}
