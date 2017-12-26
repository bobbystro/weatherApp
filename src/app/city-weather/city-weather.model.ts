export class CityWeatherModel {
  public description: string;
  public icon: string;
  public temp: number;
  public temp_min: number;
  public temp_max: number;
  public pressure: number;
  public visibility: number;
  public speed: number;
  public name: string;
  public country: string;

  constructor(description = '-',
              icon = '',
              temp = 272.15,
              temp_min = 272.15,
              temp_max = 272.15,
              pressure = 0,
              visibility = 0,
              speed = 0,
              name = '-',
              country = '-') {
    this.description = description;
    this.icon = icon;
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.pressure = pressure;
    this.visibility = visibility;
    this.speed = speed;
    this.name = name;
    this.country = country;
  }
}
