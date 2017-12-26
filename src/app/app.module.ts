import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { CitiesSiteComponent } from './cities-site/cities-site.component';
import { HomeSiteComponent } from './home-site/home-site.component';
import {AppRoutingModule} from './app-routing.module';
import { CitiesListComponent } from './cities-site/cities-list/cities-list.component';
import {CitiesListService} from './cities-site/cities-list.service';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import {CityWeatherService} from './city-weather/city-weather.service';
import { CityWeatherDetailsComponent } from './city-weather/city-weather-details/city-weather-details.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    CitiesSiteComponent,
    HomeSiteComponent,
    CitiesListComponent,
    CityWeatherComponent,
    CityWeatherDetailsComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CitiesListService, CityWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
