import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeSiteComponent} from './home-site/home-site.component';
import {CitiesSiteComponent} from './cities-site/cities-site.component';
import {CityWeatherComponent} from './city-weather/city-weather.component';
import {MessageFormComponent} from './message-form/message-form.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeSiteComponent},
  {path: 'cities-site', component: CitiesSiteComponent},
  {path: 'city-weather', component: CityWeatherComponent},
  {path: 'city-weather/:cityName', component: CityWeatherComponent},
  {path: 'message', component: MessageFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
